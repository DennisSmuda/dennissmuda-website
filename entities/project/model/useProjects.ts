import type { ProjectsCollectionItem } from '@nuxt/content'
import { getLatestProjectsQuery } from '~/entities/project/api/getLatestProjectsQuery'
import { getProjectsQuery } from '~/entities/project/api/getProjectsQuery'

export function useProjects() {
  const projects = useState<ProjectsCollectionItem[]>()
  const latestProjects = useState<ProjectsCollectionItem[]>()

  const getProjects = async () => {
    const { data } = await useAsyncData(() =>
      getProjectsQuery(),
    )
    projects.value = data.value as ProjectsCollectionItem[]
  }

  const getLatestProjects = async () => {
    const { data } = await useAsyncData(() =>
      getLatestProjectsQuery(),
    )
    latestProjects.value = data.value as ProjectsCollectionItem[]
  }

  return {
    projects,
    latestProjects,
    getProjects,
    getLatestProjects,
  }
}
