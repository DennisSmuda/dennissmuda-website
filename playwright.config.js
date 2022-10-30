// const isDev = process.env.MODE === 'development' ? true : false

const config = {
	webServer: {
		// command: isDev ? 'npm run dev' : 'npm run preview',
		// port: isDev ? 5173 : 4173,
		// reuseExistingServer: isDev ? true : false
		command: 'npm run preview',
		port: 4173
	}
}

export default config
