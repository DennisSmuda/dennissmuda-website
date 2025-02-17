import { createPage, setup } from '@nuxt/test-utils/e2e'
import { describe, expect, it } from 'vitest'

describe('page: index', async () => {
  await setup({
    host: 'http://localhost:3000',
  })

  it('can render', async () => {
    const page = await createPage('/')
    console.log('page', page)
    const headings = await page.getByTestId('rotated-heading')

    console.log('headings', headings)

    expect(headings).toBeDefined()
  })
})
