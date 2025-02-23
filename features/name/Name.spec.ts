import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest'
import { checkA11y } from '~/test/utils'
import Dot from './Dot.vue'
import Name from './Name.vue'

function mountName() {
  return mount(Name)
}
export const delay = (ms: number) => new Promise(r => setTimeout(r, ms))

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
    describe('mouse move', () => {
      let wrapper: VueWrapper

      beforeAll(() => {
        // vi.useFakeTimers()

        wrapper = mountName()
      })

      it('should grow the dot\'s radius after mount', async () => {
        const dot = wrapper.findComponent(Dot)
        const circle = dot.find('circle')

        expect(Number.parseInt(circle.attributes('r') as string)).toBe(0)

        expect(dot.exists()).toBe(true)

        await delay(800)
        expect(Number.parseInt(circle.attributes('r') as string)).toBeGreaterThan(14)
      })

      afterAll(() => {
        vi.resetAllMocks()
      })
    })

    describe('mouse leave', () => {
      it.skip('should reset the dot\'s radius', async () => {
        const wrapper = mountName()
        const dot = wrapper.findComponent(Dot)
        expect(dot.exists()).toBe(true)

        wrapper.trigger('mousemove', { offsetX: 100, offsetY: 100 })
        vi.advanceTimersByTime(150)

        expect(dot.classes()).toContain('dark:fill-white')

        await wrapper.trigger('mouseleave')
        vi.advanceTimersByTime(400)
        // await delay(400)

        expect(dot.classes()).not.toContain('dark:fill-white')

        wrapper.unmount()
      })
    })
  })

  it('should be accessible', () => {
    const wrapper = mountName()
    checkA11y(wrapper.html())
    wrapper.unmount()
  })
})
