import type { ProjectsCollectionItem } from '@nuxt/content'
import type { DOMWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { MOCK_PROJECTS } from '@/entities/project/mocks/projects'
import AllProjects from './AllProjects.vue'

const getProjects = vi.fn()

vi.mock('@/entities/project/model/useProjects', () => ({
  useProjects: () => ({
    getProjects,
    projects: ref(MOCK_PROJECTS as ProjectsCollectionItem[]),
  }),
}))

describe('feature: AllProjects', () => {
  it('should be defined', () => {
    expect(AllProjects).toBeDefined()
  })

  it('should render correctly', () => {
    const wrapper = mount(AllProjects)

    expect(getProjects).toHaveBeenCalled()
    expect(wrapper.exists()).toBe(true)

    wrapper.unmount()
  })

  describe('projects list', () => {
    it('should render projects list', () => {
      const wrapper = mount(AllProjects)
      expect(wrapper.findAll('.project').length).toBe(MOCK_PROJECTS.length)
      wrapper.unmount()
    })

    it.each([
      { ...MOCK_PROJECTS[0], index: 0 },
      { ...MOCK_PROJECTS[1], index: 1 },
    ])('should render project $headline with headline, subline, description', ({ headline, subline, url, description, index }) => {
      const wrapper = mount(AllProjects)
      const project = wrapper.findAll('.project').at(index) as DOMWrapper<Element>

      expect(project.find('h2').text()).toContain(headline)
      expect(project.find('p').text()).toContain(subline)
      expect(project.text()).toContain(description)

      const link = wrapper.findAll('a').at(index) as DOMWrapper<Element>
      expect(link.attributes('href')).toBe(url)

      wrapper.unmount()
    })
  })
})
