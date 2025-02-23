import type { PostLinkProps } from './Link.vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Link from './Link.vue'

const MOCK_POST = {
  id: '1',
  title: 'Title',
  slug: 'slug',
  createdAt: '2021-01-01',
  description: 'Description',
  subtitle: 'Subtitle',
} as PostLinkProps

function mountPostLink(props: PostLinkProps = MOCK_POST) {
  return mount(Link, {
    props,
    global: {
      stubs: {
        NuxtLink: {
          template: '<a><slot /></a>',
        },
      },
    },
  })
}

describe('shared: PostLink', () => {
  it('should be defined', () => {
    expect(Link).toBeDefined()
  })

  it('should render correctly', () => {
    const wrapper = mountPostLink()
    expect(wrapper.exists()).toBe(true)
    wrapper.unmount()
  })

  it('should render the title', () => {
    const wrapper = mountPostLink()
    const title = wrapper.find('h3')
    expect(title.text()).toBe(MOCK_POST.title)
    wrapper.unmount()
  })

  it('can be clicked', async () => {
    const wrapper = mountPostLink()
    const link = wrapper.find('a')
    await link.trigger('click')
    expect(wrapper.emitted('click')).toHaveLength(1)
    wrapper.unmount()
  })

  it('should render the created date', () => {
    const wrapper = mountPostLink()
    const date = wrapper.find('span')
    expect(date.text()).toBe(MOCK_POST.createdAt)
    wrapper.unmount()
  })
})
