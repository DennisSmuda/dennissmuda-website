import { json, type RequestHandler } from '@sveltejs/kit'

export type PostMeta = {
	path: string
	slug: string
	isPrivate: boolean
	title: string
	description: string
	createdAt: string
	tags: [tag: { name: string; value: string }]
}

export const GET: RequestHandler = () => {
	const allPostFiles: Record<string, { metadata: PostMeta }> = import.meta.glob(
		'./content/*.{svx,md}',
		{ eager: true }
	)

	const allPosts = Object.entries(allPostFiles).map(([path, post]) => {
		const postPath = path.slice(10, -3) // remove "./content" + ".md"
		return {
			...post.metadata,
			path: postPath
		}
	})

	const posts = allPosts.sort(
		(a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
	)

	return json({
		posts: posts
	})
}