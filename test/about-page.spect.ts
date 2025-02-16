import { createPage, setup } from '@nuxt/test-utils/e2e'
import { describe, expect, it } from 'vitest'

describe('login page', async () => {
  await setup({
    host: 'http://localhost:8787',
  })

  it('displays the email and password fields', async () => {
    const page = await createPage('/login')
    expect(await page.getByTestId('email').isVisible()).toBe(true)
    expect(await page.getByTestId('password').isVisible()).toBe(true)
  })
})
