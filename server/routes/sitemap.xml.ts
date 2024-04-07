import { SitemapStream, streamToPromise } from 'sitemap'
import { serverQueryContent } from '#content/server'

const SITE_URL = 'https://dennissmuda.com'

export default defineEventHandler(async (event) => {
  // Fetch all documents
  const docs = await serverQueryContent(event).find()
  const sitemap = new SitemapStream({
    hostname: SITE_URL,
  })

  sitemap.write({
    url: SITE_URL,
    changefreq: 'monthly',
  })

  sitemap.write({
    url: `${SITE_URL}/about`,
    changefreq: 'monthly',
  })

  sitemap.write({
    url: `${SITE_URL}/work`,
    changefreq: 'monthly',
  })

  sitemap.write({
    url: `${SITE_URL}/blog`,
    changefreq: 'monthly',
  })

  sitemap.write({
    url: `${SITE_URL}/impressum`,
    changefreq: 'monthly',
  })

  for (const doc of docs) {
    sitemap.write({
      url: doc._path,
      changefreq: 'monthly',
    })
  }
  sitemap.end()

  return streamToPromise(sitemap)
})
