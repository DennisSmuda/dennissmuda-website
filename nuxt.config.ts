// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  experimental: {
    viewTransition: true,
  },

  css: [
    'assets/styles.css',
  ],

  modules: [
    'motion-v/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/test-utils/module',
    '@nuxtjs/sitemap',
  ],

  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'tokyo-night',
          langs: [
            'javascript',
            'typescript',
            'gdscript',
            'json',
            'bash',
            'shell',
            'yaml',
            'markdown',
            'gdscript',
            'rust',
            'jsx',
            'toml',
          ],
        },
      },
    },
  },

  fonts: {
    defaults: {
      weights: [300, 500, 700],
    },
  },

  // FSD Layers
  components: [
    {
      path: 'shared-ui',
      extensions: ['.vue'],
      prefix: 'Shared',
    },
    {
      path: 'features',
      extensions: ['.vue'],
      prefix: 'Feature',
    },
    {
      path: 'widgets',
      extensions: ['.vue'],
      prefix: 'Widget',
    },
    {
      path: 'entities',
      extensions: ['.vue'],
      prefix: 'Entity',
    },
  ],
  imports: {
    dirs: [
      'shared/**/*.ts',
      'shared-ui/**/*.ts',
      'features/**/*.ts',
      'widgets/**/*.ts',
      'entities/**/*.ts',
    ],
  },

  // color mode module options
  colorMode: {
    classSuffix: '',
  },
  // Default App-Head (Meta-Tags)
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        {
          rel: 'manifest',
          href: '/site.webmanifest',
        },
        {
          rel: 'mask-icon',
          href: '/safari-pinned-tab.svg',
          color: '#5bbad5',
        },
        {
          rel: 'canonical',
          href: 'https://dennissmuda.com/',
        },
      ],
      meta: [
        {

          name: 'google-site-verification',
          content: 'BLz4Vp0e1I1XHPqHChy-s_7qMz2fewxpIrRu-u2v998',
        },
        {
          property: 'og:url',
          content: 'https://dennissmuda.com',
        },
        {
          name: 'lang',
          content: 'en',
        },
        {
          name: 'msapplication-TileColor',
          content: '#16171A',
        },
        {
          name: 'theme-color',
          content: '#16171A',
        },
      ],
    },
  },
})