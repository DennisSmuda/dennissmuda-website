<script>
	import Hero from './hero.svelte'
	import HomeSidebar from './sidebar.svelte'

	import Project from '$lib/features/projects/project.svelte'
	import { topProjects } from '$lib/data/projects'
</script>

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
