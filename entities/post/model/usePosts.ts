import type { BlogCollectionItem } from '@nuxt/content'
import { getLatestPostsQuery } from '~/entities/post/api/getLatestPostsQuery'
import { getPostsQuery } from '~/entities/post/api/getPostsQuery'

export function usePosts() {
  const posts = useState<BlogCollectionItem[]>()
  const latestPosts = useState<BlogCollectionItem[]>()

  const getPosts = async () => {
    const { data } = await useAsyncData(() =>
      getPostsQuery(),
    )
    posts.value = data.value as BlogCollectionItem[]
  }

  const getLatestPosts = async () => {
    const { data } = await useAsyncData(() =>
      getLatestPostsQuery(),
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
