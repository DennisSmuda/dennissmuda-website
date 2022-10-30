import type { PageLoad } from './$types'

export const load: PageLoad = async ({ fetch, params }) => {
	const res = await fetch(`/api/blog/${params.slug}`)
	const post = await res.json()

	return { post }
}
