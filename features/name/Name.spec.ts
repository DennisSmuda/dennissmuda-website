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
    describe('mouse move + leave', () => {
      let wrapper: VueWrapper
      let dot: VueWrapper

      beforeAll(() => {
        wrapper = mountName()
        dot = wrapper.findComponent(Dot)
      })

      it('should grow the dot\'s radius after mount', async () => {
        const circle = dot.find('circle')

        expect(Number.parseInt(circle.attributes('r') as string)).toBe(0)
        expect(dot.exists()).toBe(true)
        await delay(290)
        expect(Number.parseInt(circle.attributes('r') as string)).toBeGreaterThan(0)
      })

      it('should change the dot\'s color on mouse move', async () => {
        wrapper.trigger('mousemove', { offsetX: 327, offsetY: 10 })
        await delay(100)
        expect(dot.classes()).toContain('dark:fill-white')
      })

      it('should reset the dot\'s radius on mouse leave', async () => {
        wrapper.trigger('mousemove', { offsetX: 327, offsetY: 10 })
        await delay(100)
        expect(dot.classes()).toContain('dark:fill-white')

        await wrapper.trigger('mouseleave')
        await delay(100)

        await delay(300)
        expect(dot.classes()).not.toContain('dark:fill-white')
      })

      afterAll(() => {
        vi.resetAllMocks()
      })
    })
  })

  it('should be accessible', () => {
    const wrapper = mountName()
    checkA11y(wrapper.html())
    wrapper.unmount()
  })
})
