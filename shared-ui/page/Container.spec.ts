import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Container from './Container.vue'

const PROSE_CLASS = '.ds-prose'
function mountContainer(prose: boolean = false) {
  return mount(Container, {
    props: {
      prose,
    },
  })
}

describe('shared: Container', () => {
  it('should be defined', () => {
    expect(Container).toBeDefined()
  })

  it('should render correctly', () => {
    const wrapper = mountContainer()
    expect(wrapper.exists()).toBe(true)
    wrapper.unmount()
  })

  it('should render without prose class by default', () => {
    const wrapper = mountContainer()
    expect(wrapper.classes(PROSE_CLASS)).toBe(false)
    wrapper.unmount()
  })

  it('should render with prose class when prose prop is true', () => {
    const wrapper = mountContainer(true)
    const prose = wrapper.find(PROSE_CLASS)
    expect(prose.exists()).toBe(true)
    wrapper.unmount()
  })
})
