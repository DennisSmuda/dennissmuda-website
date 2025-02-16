import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    exclude: ['**/e2e/**', '**/node_modules/**'],
    coverage: {
      // you can include other reporters, but 'json-summary' is required, json is recommended
      reporter: ['html', 'json-summary', 'json'],
      // If you want a coverage reports even if your tests are failing, include the reportOnFailure option
      reportOnFailure: true,
    },
  },
})
