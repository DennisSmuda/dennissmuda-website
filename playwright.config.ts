import type { ConfigOptions } from '@nuxt/test-utils/playwright'

import { fileURLToPath } from 'node:url'
import { defineConfig, devices } from '@playwright/test'
import { isCI, isWindows } from 'std-env'

const url = 'http://localhost:3000'

export default defineConfig<ConfigOptions>({
  testDir: './e2e',
  fullyParallel: true,

  use: {
    baseURL: url,

    nuxt: {
      build: false,
      host: url,
      // rootDir: fileURLToPath(new URL('.', import.meta.url)),
    },
  },

  webServer: {
    command: `npm run dev`,
    url,
    reuseExistingServer: !isCI,
    stdout: 'ignore',
    stderr: 'pipe',
  },
})
