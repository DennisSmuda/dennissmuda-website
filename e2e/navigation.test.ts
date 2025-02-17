import { expect, test } from '@nuxt/test-utils/playwright'

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
    await page.screenshot({ path: './public/screenshot.png', fullPage: true })

    await themeButton.click()

    await expect(html).toHaveClass('dark')

    await page.reload()

    await page.waitForTimeout(1500)
    await page.screenshot({ path: './public/screenshot-dark.png', fullPage: true })

    await themeButton.click()
    await expect(html).not.toHaveClass('dark')
  })

  test('navigate from / to all main routes using the navbar', async ({
    page,
  }) => {
    await page.goto('/')

    const blogLink = await page.locator('a[href="/blog"].nav-button')
    const aboutLink = await page.locator('a[href="/about"].nav-button')
    const workLink = await page.locator('a[href="/work"].nav-button')
    const logo = await page.locator('header .logo')

    await blogLink.click()
    await expect(page).toHaveTitle(/Writing/)

    await aboutLink.click()
    await expect(page).toHaveTitle(/About Me/)

    await workLink.click()
    await expect(page).toHaveTitle(/Work/)

    await logo.click()
    await expect(page).toHaveTitle(/Dennis Smuda/)
  })
})
