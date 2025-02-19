import { describe, expect, it, vi } from 'vitest'
import { usePosts } from './usePosts'

vi.mock('~/entities/post/api/getPostsQuery', () => ({
  getPostsQuery: () => Promise.resolve(MOCK_POSTS),
}))

vi.mock('~/entities/post/api/getLatestPostsQuery', () => ({
  getLatestPostsQuery: () => Promise.resolve(MOCK_POSTS.slice(0, 3)),
}))

describe('model: usePosts', () => {
  it('should be defined', () => {
    expect(usePosts).toBeDefined()
  })

  it('should get posts', async () => {
    const { posts, getPosts } = usePosts()
    await getPosts()

    expect(posts.value).toBeDefined()
    expect(posts.value.length).toBe(MOCK_POSTS.length)
    expect(posts.value).toEqual(MOCK_POSTS)
  })

  it('should get latest posts', async () => {
    const { latestPosts, getLatestPosts } = usePosts()
    await getLatestPosts()

    expect(latestPosts.value).toBeDefined()
    expect(latestPosts.value.length).toBe(3)
    expect(latestPosts.value).toEqual(MOCK_POSTS.slice(0, 3))
  })
})
