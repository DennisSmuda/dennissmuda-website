import type { ProjectProps } from './Project.vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Project from './Project.vue'

const MOCK_PROJECT = {
  title: 'Title',
  description: 'Description',
  subtitle: 'Subtitle',
  url: 'https://example.com',
} as ProjectProps

function mountProject(props: ProjectProps = MOCK_PROJECT) {
  return mount(Project, {
    props,
  })
}

describe('shared: Project', () => {
  it('should be defined', () => {
    expect(Project).toBeDefined()
  })

  it('should render correctly', () => {
    const wrapper = mountProject()
    expect(wrapper.exists()).toBe(true)
    wrapper.unmount()
  })

  it('should render the title', () => {
    const wrapper = mountProject()
    const title = wrapper.find('h2')
    expect(title.text()).toBe(MOCK_PROJECT.title)
    wrapper.unmount()
  })

  it('should render the description', () => {
    const wrapper = mountProject()
    const description = wrapper.findAll('p').at(1)
    expect(description?.exists()).toBe(true)
    expect(description?.text()).toBe(MOCK_PROJECT.description)
    wrapper.unmount()
  })

  it('should render the subtitle', () => {
    const wrapper = mountProject()
    const description = wrapper.findAll('p').at(0)
    expect(description?.exists()).toBe(true)
    expect(description?.text()).toBe(MOCK_PROJECT.subtitle)
    wrapper.unmount()
  })
})
