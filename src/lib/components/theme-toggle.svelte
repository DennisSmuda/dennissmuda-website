<script lang="ts">
	import { onMount } from 'svelte'

	let darkButton: SVGElement
	let lightButton: SVGElement

	let isDark: boolean

	// onMount(() => {
	// 	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
	// 		// dark mode

	// 		// console.log('IS DARK ON MOUNT')

	// 		toggleDarkMode(true)
	// 	}
	// })

	const toggleDarkMode = (dark: boolean) => {
		isDark = dark
		console.log('Toggle', isDark)

		// if (isDark) {
		// 	darkButton.classList.add('hidden')
		// 	lightButton.classList.remove('hidden')
		// } else {
		// 	lightButton.classList.add('hidden')
		// 	darkButton.classList.remove('hidden')
		// }
		// return

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
	on:click={toggleDarkMode(!isDark)}
	id="theme-toggle"
	type="button"
	class="w-9 h-9 flex items-center justify-center color-black dark:color-white ml-1"
>
	<span class="sr-only">theme color toggle</span>
	<span class="dark-button" bind:this={darkButton}> 🌘 </span>
	<span class="light-button" bind:this={lightButton}> 😎 </span>
</button>

<style lang="postcss">
	button span {
		@apply text-2xl;
	}
</style>
