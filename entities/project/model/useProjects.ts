import type { ProjectsCollectionItem } from '@nuxt/content'

export function useProjects() {
  const projects = useState<ProjectsCollectionItem[]>()
  const latestProjects = useState<ProjectsCollectionItem[]>()

  const getProjects = async () => {
    const { data } = await useAsyncData(() =>
      queryCollection('projects').order('order', 'DESC').all(),
    )
    projects.value = data.value as ProjectsCollectionItem[]
  }

  const getLatestProjects = async () => {
    const { data } = await useAsyncData(() =>
      queryCollection('projects').order('order', 'DESC').limit(3).all(),
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
