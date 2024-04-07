import { expect, test } from '@playwright/test'

test.describe('component: footer', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('shows logo', async ({ page }) => {
    const logo = await page.locator('header.header .logo')
    await expect(logo).toContainText('ds')
  })

  test('shows social links', async ({ page }) => {
    const links = await page.locator('footer .icon-link')
    await expect(links).toHaveCount(4)
  })
})
