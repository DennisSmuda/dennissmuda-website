<script>
	import Header from '$lib/components/header.svelte'
	import { page } from '$app/stores'
</script>

<Header title={$page.status.toString()} subtitle={$page.error?.message || ''} />

<section class="container lg:max-w-4xl mx-auto px-8">
	<div class="ds-prose mt-20">
		<p>
			<span>something seems off... there is no page for:</span>
			<code>
				{$page.url}
			</code>
		</p>

		<a class="marker-link mt-4" href="/">go back 🧐</a>
	</div>
</section>

