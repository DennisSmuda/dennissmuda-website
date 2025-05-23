import { expect, test } from '@nuxt/test-utils/playwright'

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

  test(`shows all ${6} projects`, async ({ page }) => {
    const projects = await page.locator('.project')
    await expect(projects).toHaveCount(7)
  })
})
