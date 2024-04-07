import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const limit = Number.parseInt(query.limit as string)

  const content = await serverQueryContent(event)
    .where({ _dir: 'projects' })
    .sort({ order: 1 })
    .limit(limit)
    .find()
  return content
})
