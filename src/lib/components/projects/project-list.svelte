<script>
	import Project from './project.svelte'

	import { allProjects } from './index'
</script>

<article class="ds-prose" id="project-list">
	{#each allProjects as project}
		<Project
			url={project.url}
			headline={project.headline}
			subline={project.subline}
			description={project.description}
		/>
	{/each}
</article>

<style lang="postcss">
	a.project {
		@apply no-underline mb-16 block;
	}

	.project:focus {
		@apply outline-none ring-4 ring-offset-2 ring-offset-black ring-black no-underline;
	}

	.project:focus .project__headline,
	.project:hover .project__headline {
		@apply underline;
	}

	.project__headline {
		@apply mb-0 underline-offset-2 pointer-events-none;
	}

	.project__subline {
		@apply mb-2 text-sm opacity-50 pointer-events-none;
	}

	.project__description {
		@apply mt-0 text-sm pointer-events-none max-w-xs;
	}
</style>
