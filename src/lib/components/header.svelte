<script lang="ts">
	export let title: string
	export let subtitle: string
</script>

<section class="">
	<div class="container mx-auto px-6 md:px-8 pt-8">
		<div class="-rotate-3 flex flex-col relative md:-inset-x-4">
			<h1 class="main-heading color-change">{title}</h1>
			<p class="subtitle mb-2">
				{subtitle}
			</p>
		</div>
	</div>
</section>

<style lang="postcss">
	.subtitle {
		@apply text-xl md:text-2xl block leading-normal;
		@apply opacity-50 ml-2 md:ml-4 w-40 md:w-56;
	}
</style>
