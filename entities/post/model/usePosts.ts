import type { BlogCollectionItem } from '@nuxt/content'

export function usePosts() {
  const posts = useState<BlogCollectionItem[]>()
  const latestPosts = useState<BlogCollectionItem[]>()

  const getPosts = async () => {
    const { data } = await useAsyncData(() =>
      queryCollection('blog').order('order', 'DESC').all(),
    )
    posts.value = data.value as BlogCollectionItem[]
  }

  const getLatestPosts = async () => {
    const { data } = await useAsyncData(() =>
      queryCollection('blog').order('order', 'DESC').limit(3).all(),
    )
    latestPosts.value = data.value as BlogCollectionItem[]
  }

  return {
    posts,
    latestPosts,
    getPosts,
    getLatestPosts,
  }
}
