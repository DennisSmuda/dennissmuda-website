// import adapter from '@sveltejs/adapter-auto'
import adapter from '@sveltejs/adapter-netlify'

import preprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// extensions: ['.svelte', ...mdsvexConfig.extensions],
	extensions: ['.svelte', '.md'],

	onwarn: (warning, handler) => {
		const { code } = warning
		if (code === 'css-unused-selector') return
		handler(warning)
	},
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		}),
		mdsvex({
			extensions: ['.md']
		})
		// mdsvex(mdsvexConfig)
	],

	kit: {
		adapter: adapter({
			edge: false,
			split: true
		})
	}
}

export default config
