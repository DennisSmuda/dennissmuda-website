<script lang="ts">
	import Header from '$lib/components/header.svelte'

	type Post = {
		path: string
		title: string
		description: string
		createdAt: string
		tags: [any]
	}

	export let posts: [Post]
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

<Header title="writing ✏️" subtitle="some thoughts and words" />

<section class="container lg:max-w-4xl mx-auto px-8">
	<div class="ds-prose relative" id="blog-post-list">
		<div class="timeline" />
		{#each posts as post}
			<a class="post" href="/blog/{post.path}" sveltekit:prefetch>
				<div class="timeline__dot" />
				<div class="post__date">
					{post.createdAt}
				</div>
				<h2 class="post__headline">
					{post.title}
				</h2>
				<p class="post__subline">{post.description}</p>
				<div class="flex">
					{#each post.tags as tag}
						<button class="button tag tag--{tag.value}">
							{tag.name}
						</button>
					{/each}
				</div>
			</a>
		{/each}
	</div>
</section>

<style lang="postcss">
	.post {
		@apply no-underline my-16 md:my-32 block px-2 -inset-x-2 relative rounded-lg;
	}

	.post__date {
		@apply absolute leading-none opacity-50;
		top: -25px;
	}
	@screen md {
		.post__date {
			top: -27px;
		}
	}

	.post__headline {
		@apply mb-0;
	}

	.post:hover .post__headline {
		@apply underline;
	}

	.post__subline {
		@apply mb-2 text-sm opacity-50 pointer-events-none;
	}

	.post:hover .timeline__dot {
		@apply scale-150 bg-pink;
	}

	.timeline {
		@apply -top-6;
	}
	.timeline__dot {
		@apply -top-6 -left-4 duration-200;
	}
</style>
