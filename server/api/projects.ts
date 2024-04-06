import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  if (query.limit) {
    const limit = Number.parseInt(query.limit as string)
    const content = await serverQueryContent(event).limit(limit).where({ _dir: 'projects' }).sort({ order: 1 }).find()
    return content
  }
  else {
    const content = await serverQueryContent(event).find()
    return content
  }
})
