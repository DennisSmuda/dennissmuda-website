import { json, type RequestHandler } from '@sveltejs/kit'

export const GET: RequestHandler = async ({ params }) => {
	const post = await import(`../content/${params.slug}.md`)

	return json({
		content: post.default.render(),
		meta: post.metadata
	})
}
