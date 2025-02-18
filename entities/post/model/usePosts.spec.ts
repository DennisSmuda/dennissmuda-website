import { describe, expect, it, vi, type Mock } from 'vitest'

// vi.mock('@nuxt/content')

// const mockQuery = (queryCollection as Mock).mockResolvedValue({
//   data: [
//     {
//       title: 'Post 1',
//       description: 'Description 1',
//       url: '/post-1',
//       id: '1',
//     },
//   ]
// })

describe('model: usePosts', () => {
  it('should be defined', () => {
    expect(usePosts).toBeDefined()
  })

  it.skip('should get posts', async () => {
    // TODO: https://masteringnuxt.com/blog/unit-testing-in-nuxt
    const { getPosts } = usePosts()
    useAsyncData.mockResolvedValue({ data: { value: [{ title: 'Post 1', description: 'Description 1', url: '/post-1', id: '1' }] } })
    
    await getPosts()
    expect(posts.value).toBeDefined()
    console.log('jo?')
  })
})
