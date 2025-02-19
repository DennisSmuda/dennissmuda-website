import { describe, expect, it, vi } from 'vitest'
import { MOCK_PROJECTS } from '../mocks/projects'

import { useProjects } from './useProjects'

vi.mock('~/entities/project/api/getProjectsQuery', () => ({
  getProjectsQuery: () => Promise.resolve(MOCK_PROJECTS),
}))

vi.mock('~/entities/project/api/getLatestProjectsQuery', () => ({
  getLatestProjectsQuery: () => Promise.resolve(MOCK_PROJECTS.slice(0, 3)),
}))

describe('model: useProjects', () => {
  it('should be defined', () => {
    expect(useProjects).toBeDefined()
  })

  it('should get projects', async () => {
    const { projects, getProjects } = useProjects()
    await getProjects()

    expect(projects.value).toBeDefined()
    expect(projects.value.length).toBe(MOCK_PROJECTS.length)
    expect(projects.value).toEqual(MOCK_PROJECTS)
  })

  it('should get latest projects', async () => {
    const { latestProjects, getLatestProjects } = useProjects()
    await getLatestProjects()

    expect(latestProjects.value).toBeDefined()
    expect(latestProjects.value.length).toBe(3)
    expect(latestProjects.value).toEqual(MOCK_PROJECTS.slice(0, 3))
  })
})
