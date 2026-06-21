import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest'
import { checkA11y } from '~/test/utils'
import Dot from './Dot.vue'
import Name from './Name.vue'

// Mock motion-v to make all animations synchronous and deterministic.
// The real useSpring / useTransform rely on requestAnimationFrame-driven spring
// physics, and delay() uses a frame-based scheduler — all of which introduce
// unpredictable timing that makes tests flaky.
vi.mock('motion-v', () => {
  function createMockMotionValue(initial: number) {
    let value = initial
    const listeners: Record<string, Array<(v: number) => void>> = {}

    return {
      get: () => value,
      set: (newValue: number) => {
        value = newValue
        listeners['change']?.forEach(cb => cb(value))
      },
      on: (event: string, callback: (v: number) => void) => {
        if (!listeners[event]) listeners[event] = []
        listeners[event].push(callback)
        return () => {
          const idx = listeners[event].indexOf(callback)
          if (idx >= 0) listeners[event].splice(idx, 1)
        }
      },
    }
  }

  return {
    useSpring: (initial: number) => createMockMotionValue(initial),
    useTransform: (
      input: { on: (event: string, cb: (v: number) => void) => () => void },
      inputRange: number[],
      outputRange: number[],
    ) => {
      const derived = createMockMotionValue(outputRange[0])
      input.on('change', (latest: number) => {
        if (latest <= inputRange[0]) {
          derived.set(outputRange[0])
        } else if (latest >= inputRange[inputRange.length - 1]) {
          derived.set(outputRange[outputRange.length - 1])
        } else {
          for (let i = 0; i < inputRange.length - 1; i++) {
            if (latest >= inputRange[i] && latest <= inputRange[i + 1]) {
              const t = (latest - inputRange[i]) / (inputRange[i + 1] - inputRange[i])
              derived.set(outputRange[i] + t * (outputRange[i + 1] - outputRange[i]))
              break
            }
          }
        }
      })
      return derived
    },
    useMotionValueEvent: (
      value: { on: (event: string, cb: (v: number) => void) => () => void },
      event: string,
      callback: (v: number) => void,
    ) => value.on(event, callback),
    delay: (fn: () => void) => { fn() },
  }
})

function mountName() {
  return mount(Name)
}

describe('feature: Name', () => {
  it('should be defined', () => {
    expect(Name).toBeDefined()
  })

  it('should render', () => {
    const wrapper = mountName()
    expect(wrapper.exists()).toBe(true)
    wrapper.unmount()
  })

  describe('events', () => {
    describe('mouse move + leave', () => {
      let wrapper: VueWrapper
      let dot: VueWrapper

      beforeAll(() => {
        vi.useFakeTimers()
        wrapper = mountName()
        dot = wrapper.findComponent(Dot)
      })

      afterAll(() => {
        vi.useRealTimers()
      })

      it("should grow the dot's radius after mount", () => {
        const circle = dot.find('circle')

        // delay() from motion-v is mocked to execute callbacks immediately,
        // so the onMounted callback runs synchronously during mount().
        // This means radiusSpring already reached targetRadius (15).
        expect(dot.exists()).toBe(true)
        expect(Number.parseInt(circle.attributes('r') as string)).toBeGreaterThan(0)
      })

      it("should change the dot's color on mouse move", async () => {
        wrapper.trigger('mousemove', { offsetX: 327, offsetY: 10 })

        // onMouseMove calls radiusSpring.set(60) synchronously.
        // Vue 3 batches reactive updates via microtasks, so we need to
        // flush the queue before checking the DOM.
        await Promise.resolve()

        // The class 'dark:fill-white' is applied when radius > 20.
        expect(dot.classes()).toContain('dark:fill-white')
      })

      it("should reset the dot's radius on mouse leave", async () => {
        wrapper.trigger('mousemove', { offsetX: 327, offsetY: 10 })
        await Promise.resolve()
        expect(dot.classes()).toContain('dark:fill-white')

        wrapper.trigger('mouseleave')
        await Promise.resolve()

        // onMouseLeave schedules a setTimeout(..., 100) to reset springs.
        // With fake timers the callback hasn't fired yet, so the dot
        // should still have the active class.
        expect(dot.classes()).toContain('dark:fill-white')

        // Advance time by 100ms to trigger the setTimeout callback,
        // which resets radiusSpring to targetRadius (15).
        vi.advanceTimersByTime(100)

        // Flush Vue's reactive update queue before asserting.
        await Promise.resolve()

        // radius = 15 is not > 20, so 'dark:fill-white' is removed.
        expect(dot.classes()).not.toContain('dark:fill-white')
      })
    })
  })

  it('should be accessible', () => {
    const wrapper = mountName()
    checkA11y(wrapper.html())
    wrapper.unmount()
  })
})
