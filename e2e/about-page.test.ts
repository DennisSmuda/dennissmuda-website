import { expect, test } from '@nuxt/test-utils/playwright'

test.beforeEach(async ({ goto }) => {
  await goto('/about')
})

test('page: about - shows correct title', async ({ page }) => {
  const headingContent = await page.textContent('h1')
  await expect(headingContent).toContain('about me')
})
