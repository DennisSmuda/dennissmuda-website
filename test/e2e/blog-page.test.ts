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

  test('/blog sets canonical url for current page', async ({ page }) => {
    const canonical = page.locator('link[rel="canonical"]')

    await expect(canonical).toHaveAttribute('href', 'https://dennissmuda.com/blog')
  })
})

test.describe('page: blog slug', () => {
  test('/blog/[slug] sets canonical url for current page', async ({ page }) => {
    await page.goto('/blog/hello-world')

    const canonical = page.locator('link[rel="canonical"]')

    await expect(canonical).toHaveAttribute('href', 'https://dennissmuda.com/blog/hello-world')
  })
})
