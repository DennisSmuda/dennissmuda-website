<script>
	import Header from '$lib/components/header.svelte'
	import ProjectList from '$lib/components/projects/project-list.svelte'
</script>

<svelte:head>
	<title>Work | Dennis Smuda</title>
	<meta
		name="description"
		content="All of my past projects! Feel free to check out my work and reach out if you have any questions!"
	/>
	<meta property="og:title" content="Work | Dennis Smuda" />
	<meta
		property="og:description"
		content="All of my past projects! Feel free to check out my work and reach out if you have any questions!"
	/>
</svelte:head>

<Header title="work 🏁" subtitle="past projects" />

<section class="container lg:max-w-4xl mx-auto px-8">
	<ProjectList />
</section>
