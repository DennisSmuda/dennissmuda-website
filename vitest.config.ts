import { defineVitestConfig } from '@nuxt/test-utils/config'

console.log('jojo')

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
  },
})
