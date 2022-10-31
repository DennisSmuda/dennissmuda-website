<script lang="ts">
	import Blog from '$lib/features/blog/index.svelte'
	import type { Model } from '$lib/types/post.d'

	export let data: { posts: [Model.Post] }
</script>

<svelte:head>
	<title>Writing | Dennis Smuda</title>
	<meta
		name="description"
		content="My blog, where I write mostly about stuff I've learned on my journey."
	/>
	<meta property="og:title" content="Work | Dennis Smuda" />
	<meta
		property="og:description"
		content="My blog, where I write mostly about stuff I've learned on my journey."
	/>
</svelte:head>

<Blog posts={data.posts} />
