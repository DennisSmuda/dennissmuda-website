const defaultTheme = require('tailwindcss/defaultTheme')
const defaultColors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins', ...defaultTheme.fontFamily.sans],
				pixel: ['Pixel', ...defaultTheme.fontFamily.mono]
			}
		},
		colors: {
			'pure-black': '#101114',
			transparent: 'transparent',
			current: 'currentColor',
			black: '#16171A',
			white: '#FAFDFF',
			darkcopy: '#d1d5db',
			copy: '#374151',
			lightgray: '#ecedef',
			// gray: '#232428',
			gray: '#1a1c20',
			darkred: '#7F0622',
			red: '#D62411',
			orange: '#FF8426',
			yellow: '#FFD100',
			rose: '#FF80A4',
			pink: '#FF2674',
			lavender: '#94216A',
			purple: '#430067',
			metallicblue: '#234975',
			iceberg: '#68AED4',
			greenyellow: '#BFFF3C',
			malachite: '#10D275',
			cgblue: '#007899',
			prussianblue: '#002859'
		}
	},

	plugins: [require('@tailwindcss/typography')]
}
