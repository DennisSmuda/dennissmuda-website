import type { ProjectsCollectionItem } from '@nuxt/content'
import type { DOMWrapper } from '@vue/test-utils'
import { MOCK_PROJECTS } from '@/entities/project/mocks/projects'
import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import LatestProjects from './LatestProjects.vue'

const getLatestProjects = vi.fn()

vi.mock('@/entities/project/model/useProjects', () => ({
  useProjects: () => ({
    getLatestProjects,
    latestProjects: ref(MOCK_PROJECTS.slice(0, 3) as ProjectsCollectionItem[]),
  }),
}))

describe('feature: LatestProjects', () => {
  it('should be defined', () => {
    expect(LatestProjects).toBeDefined()
  })

  it('should render correctly', () => {
    const wrapper = mount(LatestProjects)

    expect(getLatestProjects).toHaveBeenCalled()
    expect(wrapper.exists()).toBe(true)

    wrapper.unmount()
  })

  describe('latest projects list', () => {
    it('should render latest projects', () => {
      const wrapper = mount(LatestProjects)
      expect(wrapper.findAll('.project').length).toBe(3)
      wrapper.unmount()
    })

    it.each([
      { ...MOCK_PROJECTS[0], index: 0 },
      { ...MOCK_PROJECTS[1], index: 1 },
    ])('should render project $headline with headline, subline, description', ({ headline, subline, url, description, index }) => {
      const wrapper = mount(LatestProjects)
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
