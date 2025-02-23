import { expect } from 'vitest'
import { axe } from 'vitest-axe'

export async function checkA11y(html: string, injectLandmarks?: boolean) {
  let htmlToCheck = html

  if (injectLandmarks) {
    htmlToCheck = `<html><body><main>${html}</main></body></html>`
  }

  expect(await axe(htmlToCheck)).toHaveNoViolations()
}

export const delay = (ms: number) => new Promise(r => setTimeout(r, ms))
