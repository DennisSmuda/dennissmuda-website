import type { RequestHandler } from '@sveltejs/kit'
import type { PostMeta } from '../api/blog/+server'

// Credits: https://scottspence.com/posts/make-a-sitemap-with-sveltekit
const website = 'https://dennissmuda.com'

export const GET: RequestHandler = async ({ fetch }) => {
	const res = await fetch(`/api/blog`)
	const { posts } = await res.json()

	const body = sitemap(posts)
	const headers = {
		'Cache-Control': 'max-age=0, s-maxage=3600',
		'Content-Type': 'application/xml'
	}

	return new Response(body, { headers })
}

const sitemap = (posts: [PostMeta]) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  <url>
    <loc>${website}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${website}/about</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${website}/work</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${website}/blog</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  ${posts
		.map((post) =>
			post.isPrivate
				? null
				: `
  <url>
    <loc>${website}/blog/${post.slug}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  `
		)
		.join('')}

  <url>
    <loc>${website}/imprint</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`
