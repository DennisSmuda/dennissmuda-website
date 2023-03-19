import { expect, test } from '@playwright/test'
import { topProjects } from '../src/lib/data/projects.js'

test.describe('page: index', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/')
	})

	test('has expected hero & title', async ({ page }) => {
		await expect(page).toHaveTitle(/Dennis Smuda/)

		page.textContent
		expect(await page.textContent('p.intro__paragraph')).toContain(
			'web developer'
		)
	})

	test('shows all 3 important headlines', async ({ page }) => {
		const headlines = await page.locator('h2.rotated')
		await expect(headlines).toHaveCount(3)
	})

	test('shows a working cta button for the blog', async ({ page }) => {
		const blogCta = await page.locator('aside .marker-link')
		await expect(blogCta).toBeDefined

		await blogCta.click()
		await expect(page).toHaveTitle(/Writing/)
	})

	test('shows my three latest projects', async ({ page }) => {
		const projects = await page.locator('a.project')
		await expect(projects).toHaveCount(topProjects.length)

		const firstEntry = projects.nth(0)
		await expect(firstEntry).toHaveAttribute('target', '_blank')
	})

	test('shows my latest posts', async ({ page }) => {
		const cvEntries = await page.locator('a.latest-post')
		await expect(cvEntries).toHaveCount(4)

		const firstEntry = cvEntries.first()
		await expect(firstEntry).not.toHaveAttribute('target', '_blank')
		await expect(firstEntry).toHaveAttribute('href', /blog/)

		const secondEntry = cvEntries.last()
		await expect(secondEntry).not.toHaveAttribute('target', '_blank')
		await expect(secondEntry).toHaveAttribute('href', /blog/)
	})
})
