// import type { PlaywrightTestConfig } from '@playwright/test'

const config = {
	webServer: {
		// command: 'npm run dev',
		// command: 'npm run build && npm run preview',
		// port: 3000
		reuseExistingServer: true,
		port: 4173
	}
}

export default config
