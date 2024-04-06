import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const limit = Number.parseInt(query.limit as string)

  const content = await serverQueryContent(event)
    .where({ _dir: 'blog' })
    .sort({ order: 1 })
    .limit(limit || 16)
    .find()

  return content
})
