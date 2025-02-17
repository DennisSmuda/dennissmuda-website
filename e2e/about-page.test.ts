import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import About from '~/pages/about.vue'

describe('page: about', async () => {
  it('is defined', () => {
    expect(About).toBeDefined()
    // ...
  })

  it('can render', async () => {
    const wrapper = mount(About)
    expect(wrapper.html()).toContain('about me')

    wrapper.unmount()
  })

  it('shows three subheadings', async () => {
    const wrapper = mount(About)
    const headings = wrapper.findAll('h2')

    expect(headings).toHaveLength(3)
    wrapper.unmount()
  })
})
