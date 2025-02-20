import type { AxeMatchers } from 'vitest-axe/matchers'
import 'vitest'

declare module 'vitest' {
  export interface Assertion extends AxeMatchers {}
  export interface AsymmetricMatchersContaining extends AxeMatchers {}
}
