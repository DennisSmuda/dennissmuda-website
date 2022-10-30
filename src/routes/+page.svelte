<script>
	import Hero from '$lib/components/home/hero.svelte'
	import Project from '$lib/components/projects/project.svelte'
	import HomeSidebar from '$lib/components/home/sidebar.svelte'

	import { topProjects } from '$lib/components/projects/index'
</script>

<svelte:head>
	<title>Dennis Smuda - web developer based in Germany</title>
	<meta
		name="description"
		content="I write about stuff I learn along the way and post about projects I release. Come find out more about me or my work, maybe get in touch"
	/>
	<meta name="keywords" content="Development, Web, Frontend, Javascript" />
	<meta
		property="og:title"
		content="Dennis Smuda - web developer based in Germany."
	/>
	<meta
		property="og:description"
		content="I write about stuff I learn along the way and post about projects I release. Come find out more about me or my work, maybe get in touch"
	/>
</svelte:head>

<!-- Hero -->
<Hero />

<!-- Project List + Sidebar -->
<section
	class="flex flex-col-reverse max-w-lg md:max-w-2xl md:grid p-8 gap-16 md:grid-cols-12 container mx-auto lg:max-w-4xl"
>
	<article class="ds-prose col-span-7 md:mt-20">
		<h2 class="rotated">latest work 🏁</h2>

		{#each topProjects as project}
			<Project
				url={project.url}
				headline={project.headline}
				subline={project.subline}
				description={project.description}
			/>
		{/each}
	</article>

	<aside class="ds-prose col-span-5 -mt-12">
		<h2 class="rotated">making things with 🛠</h2>

		<HomeSidebar />
	</aside>
</section>
