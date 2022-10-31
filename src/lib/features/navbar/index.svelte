<script lang="ts">
	import { page } from '$app/stores'
	import Logo from '$lib/components/logo.svelte'
	import ThemeToggle from '$lib/components/theme-toggle.svelte'
	let path: string

	$: path = $page.url.pathname
</script>

<header class="header p-4">
	<Logo active={path === '/'} />

	<div class="header__nav">
		<a
			class="button nav-button"
			href="/blog"
			aria-current={path === '/blog' ? true : undefined}
		>
			<span> writing </span>
			<span> ✏️ </span>
		</a>
		<span>|</span>
		<a
			class="button nav-button"
			href="/about"
			aria-current={path === '/about' ? true : undefined}
		>
			<span>about</span>
			<span> 👨🏻‍💻 </span>
		</a>
		<span>|</span>
		<a
			class="button nav-button"
			href="/work"
			aria-current={path === '/work' ? true : undefined}
		>
			<span> work </span>
			<span> 🏋️‍♀️ </span>
		</a>
		<span>|</span>
		<ThemeToggle />
	</div>
</header>

<style lang="postcss">
	.header {
		@apply flex items-center justify-between select-none py-4;
	}

	.header__nav {
		@apply flex items-center justify-center;
	}

	.header__nav > span {
		@apply mx-1 opacity-50 hidden;
	}

	.header__nav a {
		@apply mx-1 sm:mx-2 sm:px-3 py-1 rounded-lg font-medium;
	}

	.header__nav a:hover {
		@apply text-pink;
	}

	.header__nav a span:first-child {
		@apply sr-only sm:not-sr-only sm:mr-2;
	}

	.header__nav a span:last-child {
		@apply flex text-2xl;
	}
</style>
