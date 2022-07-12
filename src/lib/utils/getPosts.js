export async function getPosts() {
	const posts = await Object.entries(
		import.meta.globEager('../../routes/blog/content/*.{svx,md}')
	)
		// get post metadata
		.map(([, post]) => post.metadata)
		// sort by date
		.sort(
			(a, b) =>
				new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
		)

	return posts
}
