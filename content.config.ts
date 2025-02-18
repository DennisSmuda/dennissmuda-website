import {
  defineCollection,
  defineContentConfig,
  z,
} from '@nuxt/content'

export default defineContentConfig({
  collections: {
    copy: defineCollection({
      type: 'page',
      source: 'copy/*.md',
      schema: z.object({
        path: z.string(),
        title: z.string(),
        description: z.string(),
        seo: z.intersection(
          z.object({
            title: z.string().optional(),
            description: z.string().optional(),
            meta: z.array(z.record(z.string(), z.any())).optional(),
            link: z.array(z.record(z.string(), z.any())).optional(),
          }),
          z.record(z.string(), z.any()),
        ).optional().default({}),
        body: z.object({
          type: z.string(),
          children: z.any(),
          toc: z.any(),
        }),
        navigation: z.union([
          z.boolean(),
          z.object({
            title: z.string(),
            description: z.string(),
            icon: z.string(),
          }),
        ]).default(true),
      }),
    }),
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
