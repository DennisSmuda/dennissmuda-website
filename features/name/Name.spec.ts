import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { checkA11y } from '~/test/utils'
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

  it('should be accessible', () => {
    const wrapper = mountName()
    checkA11y(wrapper.html())
    wrapper.unmount()
  })
})
