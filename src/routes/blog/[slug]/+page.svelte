<!-- <script lang="ts"> -->
<script lang="ts">
	import type { PageData } from './$types'
	import Header from '$lib/components/header.svelte'

	export let data: PageData

	const meta = data.post.meta
	const postContent = data.post.content
</script>

<svelte:head>
	<title>{meta.title} - Blog | Dennis Smuda</title>
	<meta name="description" content={meta.description} />
	<meta property="og:title" content="{meta.title} - Blog | Dennis Smmuda" />
	<meta property="og:description" content={meta.description} />
</svelte:head>

<Header title={meta.title} subtitle="" />

<section class="container lg:max-w-4xl mx-auto px-8">
	<div class="ds-prose ">
		<article class="ds-prose">
			{@html postContent.html}
		</article>
	</div>
</section>
