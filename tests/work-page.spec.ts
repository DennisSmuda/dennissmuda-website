import { expect, test } from '@playwright/test'

import { allProjects } from '../src/lib/components/projects/index.js'

test('/work shows correct title', async ({ page }) => {
	await page.goto('/work')

	const headingContent = await page.textContent('h1')
	await expect(headingContent).toContain('work')

	const heading = await page.locator('h1')
	await expect(heading).toHaveText('work 🏁')
})

test(`/work shows all ${allProjects.length} projects`, async ({ page }) => {
	await page.goto('/work')

	const projects = await page.locator('#project-list a')
	await expect(projects).toHaveCount(allProjects.length)
})
