import { expect, test } from '@playwright/test'

import { allProjects } from '../src/lib/components/projects/index.js'

test.describe('page: work', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/work')
	})

	test('shows correct title', async ({ page }) => {
		const headingContent = await page.textContent('h1')
		await expect(headingContent).toContain('work')

		const heading = await page.locator('h1')
		await expect(heading).toHaveText('work 🏁')
	})

	test(`shows all ${allProjects.length} projects`, async ({ page }) => {
		const projects = await page.locator('#project-list a')
		await expect(projects).toHaveCount(allProjects.length)
	})
})
