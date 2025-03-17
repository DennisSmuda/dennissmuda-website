import type { ConfigOptions } from '@nuxt/test-utils/playwright'

import { defineConfig } from '@playwright/test'
import { isCI } from 'std-env'

const url = 'http://localhost:3000'

export default defineConfig<ConfigOptions>({
  testDir: './test/e2e',
  fullyParallel: true,
  forbidOnly: !!isCI,
  retries: isCI ? 2 : 0,
  reporter: 'html',

  use: {
    baseURL: url,

    nuxt: {
      build: false,
      host: url,
    },
  },

  // projects: [
  //   {
  //     name: 'chromium',
  //     use: { ...devices['Desktop Chrome'] },
  //   },
  // ],

  webServer: {
    command: `npm run dev`,
    url,
    reuseExistingServer: !isCI,
    stdout: 'ignore',
    stderr: 'pipe',
  },
})
