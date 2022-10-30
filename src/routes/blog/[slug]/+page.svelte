<script context="module" lang="ts">
	export const load = async ({ params }: LoadEvent) => {
		console.log('Load ')
		try {
			const post = await import(`./content/${params.slug}.md`)
			console.log('load post with params', params)
			return {
				props: {
					PostContent: post.default,
					meta: { ...post.metadata, slug: params.slug }
				}
			}
		} catch (error: any) {
			return {
				status: 404,
				error: error.message
			}
		}
	}
</script>

<!-- <script lang="ts"> -->
<script lang="ts">
	import type { LoadEvent } from '@sveltejs/kit'
	import Header from '$lib/components/header.svelte'

	export let PostContent: any
	export let meta: any = {}
	// export let post: any
	// console.log('Meta', meta)
</script>

<svelte:head>
	<title>{meta.title} - Blog | Dennis Smuda</title>
	<meta name="description" content={meta.description} />
	<meta property="og:title" content="{meta.title} - Blog | Dennis Smmuda" />
	<meta property="og:description" content={meta.description} />
</svelte:head>

<Header title={meta.title} subtitle="" />

<section class="container lg:max-w-4xl mx-auto px-8">
	<div class="ds-prose ">
		<article class="ds-prose">
			<svelte:component this={PostContent} />
		</article>
		<!-- <slot /> -->
	</div>
</section>
