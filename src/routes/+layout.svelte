<script lang="ts">
	import { spring, type Spring } from 'svelte/motion'

	import BackgroundShape from '$lib/components/background-shape.svelte'
	import Navbar from '$lib/features/navbar/index.svelte'
	import Footer from '$lib/features/footer/index.svelte'

	import '../styles/tailwind.css'
	import '../styles/app.css'

	let coords = spring(
		{ x: 50, y: 50 },
		{
			stiffness: 0.12,
			damping: 0.225
		}
	)

	let size = spring(10, {
		stiffness: 0.15
	})
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap"
		rel="stylesheet"
	/>
	<meta
		name="google-site-verification"
		content="BLz4Vp0e1I1XHPqHChy-s_7qMz2fewxpIrRu-u2v998"
	/>
	<link rel="canonical" href="https://dennissmuda.com/" />
	<meta property="og:url" content="https://dennissmuda.com" />
</svelte:head>

<div
	class="app-wrapper"
	on:mousemove={(e) => {
		coords.set({ x: e.clientX, y: e.clientY })
		const currentTag = e?.target.tagName.toLowerCase()

		if (currentTag === 'button' || currentTag === 'a') {
			size.set(25)
		} else {
			size.set(10)
		}
	}}
	on:mousedown={() => size.set(50)}
	on:mouseup={() => size.set(10)}
>
	<BackgroundShape size={$size} coords={$coords} />

	<main class="relative">
		<Navbar />

		<slot />

		<Footer />
	</main>
</div>

<style lang="postcss" global>
	body {
		@apply bg-white text-black relative min-h-screen;
		@apply dark:bg-black dark:text-white;
		@apply transition-colors duration-700 overflow-x-hidden;
	}

	body::-webkit-scrollbar {
		@apply z-50 w-1;
	}

	body::-webkit-scrollbar-track {
		/* @apply bg-gray; */
	}

	body::-webkit-scrollbar-thumb {
		@apply bg-orange outline-orange;
	}
</style>
