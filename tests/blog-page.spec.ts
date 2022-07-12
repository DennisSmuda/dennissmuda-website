import { expect, test } from '@playwright/test'

test('/blog shows correct title', async ({ page }) => {
	await page.goto('/blog')

	const headingContent = await page.textContent('h1')
	await expect(headingContent).toContain('writing')

	const heading = await page.locator('h1')
	await expect(heading).toHaveText('writing ✏️')
})

test(`/blog shows all blog posts`, async ({ page }) => {
	await page.goto('/blog')

	const projects = await page.locator('#blog-post-list a')
	await expect(projects).toHaveCount(4)
})
