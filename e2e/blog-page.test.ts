import { expect, test } from '@nuxt/test-utils/playwright'

test.describe('page: blog', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/blog')
  })

  test('/blog shows correct title', async ({ page }) => {
    const headingContent = await page.textContent('h1')
    await expect(headingContent).toContain('writing')

    const heading = await page.locator('h1')
    await expect(heading).toHaveText('writing ✏️')
  })

  test(`/blog shows all blog posts`, async ({ page }) => {
    const projects = await page.locator('#blog-post-list a')
    await expect(projects).toHaveCount(6)
  })
})
