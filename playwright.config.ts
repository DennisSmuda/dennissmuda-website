// import type { PlaywrightTestConfig } from '@playwright/test'

const config = {
	webServer: {
		command: 'npm run dev',
		// command: 'npm run build && npm run preview',
		reuseExistingServer: true,
		// port: 3000
		port: 4173
	}
}

export default config
