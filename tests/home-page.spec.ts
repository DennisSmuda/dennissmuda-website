import { expect, test } from '@playwright/test'

test('index page has expected hero & title', async ({ page }) => {
	await page.goto('/')

	await expect(page).toHaveTitle(/Dennis Smuda/)

	expect(await page.textContent('p.intro__paragraph')).toContain(
		'web developer based in germany'
	)
})

test('index page shows all 3 important headlines', async ({ page }) => {
	await page.goto('/')

	const headlines = await page.locator('h2.rotated')
	await expect(headlines).toHaveCount(3)
})

test('index page shows a working cta button for the blog', async ({ page }) => {
	await page.goto('/')

	const blogCta = await page.locator('aside .marker-link')
	await expect(blogCta).toBeDefined

	await blogCta.click()
	await expect(page).toHaveTitle(/Writing/)
})
