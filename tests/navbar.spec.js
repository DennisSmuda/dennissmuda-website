import { expect, test } from '@playwright/test'

test.describe('component: navbar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('shows logo', async ({ page }) => {
    const logo = await page.locator('header.header .logo')
    await expect(logo).toContainText('ds')
  })

  test('shows 3 nav links', async ({ page }) => {
    const navLinks = await page.locator('.header__nav > a')
    await expect(navLinks).toHaveCount(3)
  })

  test('can toggle color theme', async ({ page }) => {
    const themeButton = await page.locator('#theme-toggle')
    const html = await page.locator('html')

    await page.waitForTimeout(1500)
    await page.screenshot({ path: 'screenshot.png', fullPage: true })

    await themeButton.click()

    await expect(html).toHaveClass('dark')

    await page.reload()

    await page.waitForTimeout(1500)
    await page.screenshot({ path: 'screenshot-dark.png', fullPage: true })

    await themeButton.click()
    await expect(html).not.toHaveClass('dark')
  })
})
