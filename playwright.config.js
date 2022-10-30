const isDev = process.env.MODE === 'development' || true

const config = {
	webServer: {
		command: isDev ? 'npm run dev' : 'npm run preview',
		port: isDev ? 5173 : 4173,
		reuseExistingServer: isDev ? true : false
	}
}

export default config
