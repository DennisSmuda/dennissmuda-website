<script lang="ts">
	import Project from './project.svelte'

	import { allProjects } from './index'
</script>

<article class="ds-prose mt-12" id="project-list">
	{#each allProjects as project}
		<Project
			url={project.url}
			headline={project.headline}
			subline={project.subline}
			description={project.description}
		/>
	{/each}
</article>
