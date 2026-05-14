import { expect, test } from '@nuxt/test-utils/playwright'

test.describe('page: impressum', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/impressum')
  })

  test('sets canonical url for current page', async ({ page }) => {
    const canonical = page.locator('link[rel="canonical"]')
    await expect(canonical).toHaveAttribute('href', 'https://dennissmuda.com/impressum')
  })
})
