import { expect, test } from '@playwright/test'

test.describe('page: blog', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/about')
	})

	test('shows correct title', async ({ page }) => {
		const headingContent = await page.textContent('h1')
		await expect(headingContent).toContain('about me')
	})

	test(`shows three different sections`, async ({ page }) => {
		const headlines = await page.locator('h2.rotated')
		await expect(headlines).toHaveCount(3)
	})

	test(`shows and links to my past work places (external links)`, async ({
		page
	}) => {
		const cvEntries = await page.locator('.cv-wrapper a')
		await expect(cvEntries).toHaveCount(3)

		const numEntries = await cvEntries.count()
		const firstEntry = cvEntries.nth(numEntries - 1)
		const secondEntry = cvEntries.nth(numEntries - 2)
		const thirdEntry = cvEntries.nth(numEntries - 3)

		await expect(firstEntry).toContainText('VOLL digital')
		await expect(firstEntry).toHaveAttribute('target', '_blank')
		await expect(firstEntry).toHaveAttribute('href', /voll.digital/)

		await expect(secondEntry).toContainText('Urlaubsguru')
		await expect(secondEntry).toHaveAttribute('target', '_blank')
		await expect(secondEntry).toHaveAttribute('href', /urlaubsguru.de/)

		await expect(thirdEntry).toContainText('FTAPI')
		await expect(thirdEntry).toHaveAttribute('target', '_blank')
		await expect(thirdEntry).toHaveAttribute('href', /ftapi.com/)
	})
})
