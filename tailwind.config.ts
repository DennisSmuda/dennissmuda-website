import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'
// import defaultColors from 'tailwindcss/colors'
import theme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', ...theme.fontFamily.sans],
        pixel: ['Pixel', ...theme.fontFamily.mono],
      },
    },
    colors: {
      // ...defaultColors,
      'pure-black': '#101114',
      'transparent': 'transparent',
      'current': 'currentColor',
      'black': '#16171A',
      'white': '#FAFDFF',
      'darkcopy': '#d1d5db',
      'copy': '#374151',
      'lightgray': '#ecedef',
      // gray: '#232428',
      'gray': '#1a1c20',
      'darkred': '#7F0622',
      'red': '#D62411',
      'orange': '#FF8426',
      'yellow': '#FFD100',
      'rose': '#FF80A4',
      'pink': '#FF2674',
      'lavender': '#94216A',
      'purple': '#430067',
      'metallicblue': '#234975',
      'iceberg': '#68AED4',
      'greenyellow': '#BFFF3C',
      'malachite': '#10D275',
      'cgblue': '#007899',
      'prussianblue': '#002859',
    },
  },
  plugins: [typography],
}
