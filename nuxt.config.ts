// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  experimental: {
    viewTransition: true,
  },
  css: [
    'assets/styles.css',
  ],
  components: [
    {
      path: '~/features',
      pathPrefix: false,
    },
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@nuxt/fonts',
  ],
  content: {
    highlight: {
      theme: 'tokyo-night',
      langs: ['javascript', 'typescript', 'json', 'bash', 'shell', 'yaml', 'markdown', 'gdscript', 'rust', 'jsx', 'toml'],
    },
  },
  fonts: {
    defaults: {
      weights: [300, 500, 700],
    },
  },
  colorMode: {
    classSuffix: '',
  },
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
