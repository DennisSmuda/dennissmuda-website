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
})
