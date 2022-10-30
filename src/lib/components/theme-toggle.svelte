<script lang="ts">
	let isDark: boolean

	const toggleDarkMode = (dark: boolean) => {
		isDark = dark

		if (localStorage.getItem('color-theme')) {
			if (localStorage.getItem('color-theme') === 'light') {
				document.documentElement.classList.add('dark')
				localStorage.setItem('color-theme', 'dark')
			} else {
				document.documentElement.classList.remove('dark')
				localStorage.setItem('color-theme', 'light')
			}

			// if NOT set via local storage previously
		} else {
			if (document.documentElement.classList.contains('dark')) {
				document.documentElement.classList.remove('dark')
				localStorage.setItem('color-theme', 'light')
			} else {
				document.documentElement.classList.add('dark')
				localStorage.setItem('color-theme', 'dark')
			}
		}
	}
</script>

<button
	on:click={() => toggleDarkMode(!isDark)}
	id="theme-toggle"
	type="button"
	class="w-9 h-9 flex items-center justify-center color-black dark:color-white ml-1"
>
	<span class="sr-only">theme color toggle</span>
	<span class="dark-button"> 🌘 </span>
	<span class="light-button"> 😎 </span>
</button>

<style lang="postcss">
	button span {
		@apply text-2xl;
	}
</style>
