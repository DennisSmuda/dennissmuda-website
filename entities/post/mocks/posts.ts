import type { BlogCollectionItem } from "@nuxt/content";

export const MOCK_POSTS: BlogCollectionItem[] = [
  {
    title: 'Post 1',
    createdAt: '2021-01-01',
    slug: 'post-1',
    tags: [{ name: 'tag1', value: 'tag1' }],
    description: 'Description 1',
    id: '1',
    published: true,
    order: 1,
    path: '/blog/post-1',
  } as BlogCollectionItem,
  {
    title: 'Post 2',
    createdAt: '2021-01-01',
    slug: 'post-2',
    tags: [{ name: 'tag1', value: 'tag1' }],
    description: 'Description 2',
    id: '2',
    published: true,
    order: 2,
    path: '/blog/post-2',
  } as BlogCollectionItem,
]