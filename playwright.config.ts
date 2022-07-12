import type { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'npm run dev',
		// command: 'npm run build && npm run preview',
		reuseExistingServer: true,
		port: 3000
	}
}

export default config
