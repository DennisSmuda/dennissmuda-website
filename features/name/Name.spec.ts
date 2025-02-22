import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { checkA11y } from '~/test/utils'
import Dot from './Dot.vue'
import Name from './Name.vue'

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

  it('should have mouseMove event', () => {
    const wrapper = mountName()
    const dot = wrapper.findComponent(Dot)
    expect(dot.exists()).toBe(true)

    wrapper.trigger('mousemove')

    // dot.trigger('mousemove')

    // expect(wrapper.emitted('mouseMove')).toBeTruthy()
    wrapper.unmount()
  })

  it('should be accessible', () => {
    const wrapper = mountName()
    checkA11y(wrapper.html())
    wrapper.unmount()
  })
})
