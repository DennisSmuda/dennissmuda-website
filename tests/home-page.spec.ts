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

test('index page shows my three lastest projects', async ({ page }) => {
	await page.goto('/')

	const cvEntries = await page.locator('a.project')
	await expect(cvEntries).toHaveCount(3)

	const firstEntry = cvEntries.nth(0)
	await expect(firstEntry).toHaveAttribute('target', '_blank')
})

test('index page shows my two lastest posts', async ({ page }) => {
	await page.goto('/')

	const cvEntries = await page.locator('a.latest-post')
	await expect(cvEntries).toHaveCount(2)

	const firstEntry = cvEntries.first()
	await expect(firstEntry).not.toHaveAttribute('target', '_blank')
	await expect(firstEntry).toHaveAttribute('href', /blog/)

	const secondEntry = cvEntries.last()
	await expect(secondEntry).not.toHaveAttribute('target', '_blank')
	await expect(secondEntry).toHaveAttribute('href', /blog/)
})
