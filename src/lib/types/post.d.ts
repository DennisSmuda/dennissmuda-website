export namespace Model {
	export type Post = {
		path: string
		slug: string
		isPrivate: boolean
		published: boolean
		title: string
		description: string
		createdAt: string
		tags: [tag: { name: string; value: string }]
	}
}
