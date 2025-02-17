import {
  defineCollection,
  defineContentConfig,
  z,
} from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        slug: z.string(),
        title: z.string(),
        description: z.string(),
        createdAt: z.string(),
        published: z.boolean(),
        tags: z.array(z.object({
          name: z.string(),
          value: z.string(),
        })),
        order: z.number(),
      }),
    }),
    projects: defineCollection({
      type: 'page',
      source: 'projects/*.md',
      schema: z.object({
        headline: z.string(),
        subline: z.string(),
        description: z.string(),
        url: z.string(),
        order: z.number(),
      }),
    }),
  },
})
