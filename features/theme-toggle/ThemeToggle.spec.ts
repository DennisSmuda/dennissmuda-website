import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import ThemeToggle from './ThemeToggle.vue'

describe('feature: ThemeToggle', () => {
  it('should be defined', () => {
    expect(ThemeToggle).toBeDefined()
  })

  it('should render "theme color toggle"', () => {
    const wrapper = mount(ThemeToggle)
    expect(wrapper.text()).toContain('theme color toggle')
  })
})
