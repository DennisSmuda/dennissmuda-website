import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it, vi } from 'vitest'
import About from '~/pages/about.vue'
import { checkA11y } from '~/test/utils'

vi.mock('~/entities/content/api/getContentQuery', () => ({
  getContentQuery: () => Promise.resolve(MOCK_POSTS.slice(0, 3)),
}))

function mountAbout() {
  return mountSuspended(About, {
    global: {
      stubs: {
        RouterLink: {
          template: '<a><slot /></a>',
        },
      },
    },
  })
}

describe('widget: About', () => {
  it('should be defined', () => {
    expect(About).toBeDefined()
  })

  it('should render', async () => {
    const wrapper = await mountAbout()
    expect(wrapper.exists()).toBe(true)
    wrapper.unmount()
  })

  it('should be accessible', async () => {
    const wrapper = await mountAbout()
    checkA11y(wrapper.html(), true)
    wrapper.unmount()
  })
})
