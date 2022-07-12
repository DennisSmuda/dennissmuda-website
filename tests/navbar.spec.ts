import { expect, test } from '@playwright/test'

test('navbar shows logo', async ({ page }) => {
	await page.goto('/')
	const logo = await page.locator('header.header .logo')
	await expect(logo).toContainText('ds')
})

test('navbar shows 3 nav links', async ({ page }) => {
	await page.goto('/')
	const navLinks = await page.locator('.header__nav > a')
	await expect(navLinks).toHaveCount(3)
})

test('can toggle color theme', async ({ page }) => {
	await page.goto('/')
	const themeButton = await page.locator('#theme-toggle')
	const html = await page.locator('html')

	await themeButton.click()

	await expect(html).toHaveClass('dark')

	await themeButton.click()
	await expect(html).not.toHaveClass('dark')
})
