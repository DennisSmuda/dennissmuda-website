import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Title from './Title.vue'

function mountTitle({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
} = {
  title: 'Title',
  subtitle: 'Subtitle',
}) {
  return mount(Title, {
    props: {
      title,
      subtitle,
    },
  })
}

describe('shared: Title', () => {
  it('should be defined', () => {
    expect(Title).toBeDefined()
  })

  it('should render correctly', async () => {
    const wrapper = await mountTitle()
    expect(wrapper.exists()).toBe(true)
    wrapper.unmount()
  })

  it('should render the title', async () => {
    const wrapper = await mountTitle()
    const heading = wrapper.find('h1')
    expect(heading.text()).toBe('Title')
    wrapper.unmount()
  })

  it('should render a subtitle', async () => {
    const wrapper = await mountTitle()
    const subtitle = wrapper.find('p')
    expect(subtitle.text()).toBe('Subtitle')
    wrapper.unmount()
  })

  it('can render without a subtitle', async () => {
    const wrapper = await mountTitle({ title: 'Title', subtitle: undefined })
    const subtitle = wrapper.find('p')
    expect(subtitle.exists()).toBe(false)
    wrapper.unmount()
  })
})
