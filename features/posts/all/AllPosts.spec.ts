import type { BlogCollectionItem } from '@nuxt/content'
import type { DOMWrapper } from '@vue/test-utils'
import { MOCK_POSTS } from '@/entities/post/mocks/posts'
import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import AllPosts from './AllPosts.vue'

const getPosts = vi.fn()

vi.mock('~/entities/post/model/usePosts', () => ({
  usePosts: () => ({
    getPosts,
    posts: ref(MOCK_POSTS as BlogCollectionItem[]),
  }),
}))

function mountAllPosts() {
  return mount(AllPosts, {
    global: {
      stubs: {
        NuxtLink: {
          template: '<a><slot /></a>',
        },
      },
    },
  })
}

describe('feature: AllPosts', () => {
  it('should be defined', () => {
    expect(AllPosts).toBeDefined()
  })

  it('should render correctly', () => {
    const wrapper = mountAllPosts()

    expect(getPosts).toHaveBeenCalled()
    expect(wrapper.exists()).toBe(true)

    wrapper.unmount()
  })

  describe('all posts list', () => {
    it('should render all projects', () => {
      const wrapper = mountAllPosts()
      expect(wrapper.findAll('a').length).toBe(2)
      wrapper.unmount()
    })

    it.each([
      { ...MOCK_POSTS[0], index: 0 },
      { ...MOCK_POSTS[1], index: 1 },
    ])('should render post $headline with title, subline and correct link', ({
      title,
      description,
      path,
      index,
    }) => {
      const wrapper = mountAllPosts()
      const post = wrapper.findAll('a').at(index) as DOMWrapper<Element>

      expect(post.find('h2').text()).toContain(title)
      expect(post.find('p').text()).toContain(description)

      const link = wrapper.findAll('a').at(index) as DOMWrapper<Element>
      expect(link.attributes('to')).toBe(path)

      wrapper.unmount()
    })
  })
})
