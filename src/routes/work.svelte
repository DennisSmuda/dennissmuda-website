<script>
	import Header from '$lib/components/header.svelte'
	import ProjectList from '$lib/components/projects/project-list.svelte'
</script>

<svelte:head>
	<title>Work | Dennis Smuda</title>
	<meta
		name="description"
		content="Work | Dennis Smuda, a programmer from Germany!"
	/>
</svelte:head>

<Header title="work 🏁" subtitle="past projects" />

<section class="container lg:max-w-4xl mx-auto px-8">
	<ProjectList />
</section>
