import type { BlogCollectionItem } from '@nuxt/content'
import type { DOMWrapper } from '@vue/test-utils'
import { MOCK_POSTS } from '@/entities/post/mocks/posts'
import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import LatestPosts from './LatestPosts.vue'

const getLatestPosts = vi.fn()

vi.mock('~/entities/post/model/usePosts', () => ({
  usePosts: () => ({
    getLatestPosts,
    latestPosts: ref(MOCK_POSTS.slice(0, 3) as BlogCollectionItem[]),
  }),
}))

function mountLatestPosts() {
  return mount(LatestPosts, {
    global: {
      stubs: {
        NuxtLink: {
          template: '<a><slot /></a>',
        },
      },
    },
  })
}

describe('feature: LatestPosts', () => {
  it('should be defined', () => {
    expect(LatestPosts).toBeDefined()
  })

  it('should render correctly', () => {
    const wrapper = mountLatestPosts()

    expect(getLatestPosts).toHaveBeenCalled()
    expect(wrapper.exists()).toBe(true)

    wrapper.unmount()
  })

  it('has a link to the blog page', () => {
    const wrapper = mountLatestPosts()
    const link = wrapper.find('a[to="/blog"]')
    expect(link.exists()).toBe(true)
    wrapper.unmount()
  })

  describe('latest projects list', () => {
    it('should render latest projects', () => {
      const wrapper = mountLatestPosts()
      expect(wrapper.findAll('.latest-post').length).toBe(3)
      wrapper.unmount()
    })

    it.each([
      { ...MOCK_POSTS[0], index: 0 },
      { ...MOCK_POSTS[1], index: 1 },
    ])('should render post $headline with title and created date', ({ title, createdAt, path, index }) => {
      const wrapper = mountLatestPosts()
      const post = wrapper.findAll('a').at(index) as DOMWrapper<Element>

      expect(post.find('h3').text()).toContain(title)
      expect(post.find('span').text()).toContain(createdAt)

      const link = wrapper.findAll('a').at(index) as DOMWrapper<Element>
      expect(link.attributes('to')).toBe(path)

      wrapper.unmount()
    })
  })
})
