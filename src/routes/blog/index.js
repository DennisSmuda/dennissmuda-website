export async function get() {
	const allPostFiles = import.meta.globEager('./content/*.{svx,md}')
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

	if (!allPosts.length) {
		return { status: 404 }
	}
	return { body: { posts } }
}
