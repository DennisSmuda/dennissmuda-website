import { setup } from '@nuxt/test-utils'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import About from '~/pages/about.vue'
import Index from '~/pages/index.vue'

describe('page: index', async () => {
  // await setup()
  it('is defined', () => {
    expect(Index).toBeDefined()
    // ...
  })

  it('can render', async () => {
    const wrapper = mount(Index)
    // expect(wrapper.html()).toContain('dennis')
    console.log('wrapper.html()', wrapper.html())

    wrapper.unmount()
  })

  // TODO: probably need suspended test? (https://nuxt.com/docs/getting-started/testing#%EF%B8%8F-helpers)
  it('shows three subheadings', async () => {
    const wrapper = mount(About)
    const headings = wrapper.findAll('h2')

    expect(headings).toHaveLength(3)
    wrapper.unmount()
  })
})
