import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
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
      it('should change the dot\'s radius', async () => {
        const wrapper = mountName()
        const dot = wrapper.findComponent(Dot)
        expect(dot.exists()).toBe(true)

        wrapper.trigger('mousemove', { offsetX: 100, offsetY: 100 })

        await delay(150)

        expect(dot.classes()).toContain('dark:fill-white')

        wrapper.unmount()
      })
    })

    describe('mouse leave', () => {
      it('should have mouseLeave event', () => {
        const wrapper = mountName()
        const dot = wrapper.findComponent(Dot)
        expect(dot.exists()).toBe(true)

        wrapper.trigger('mouseleave')
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
