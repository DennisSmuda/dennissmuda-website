<script lang="ts">
	export let active: Boolean
</script>

<a href="/" class="logo button" aria-current={active ? 'true' : undefined}>
	ds
	<span>.</span>
</a>

<style lang="postcss">
	.logo {
		@apply flex items-center justify-center;
		@apply text-4xl font-black;
		@apply py-2 h-12 cursor-pointer m-0 rounded-lg;
		@apply px-2;
		letter-spacing: -2.3px;
	}

	.logo:hover,
	.logo[aria-current] {
		@apply dark:bg-gray;
	}

	.logo span {
		@apply transition-transform translate-y-0;
	}

	.logo[aria-current] span {
		@apply text-orange;
	}

	.logo:hover span {
		@apply -translate-y-2;
	}

	.logo:focus span {
		@apply translate-y-0 duration-75;
	}
</style>
