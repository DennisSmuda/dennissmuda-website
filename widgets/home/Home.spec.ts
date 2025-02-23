import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { checkA11y } from '~/test/utils'
import Home from './Home.vue'

function mountHome() {
  return mount(Home, {
    global: {
      stubs: {
        RouterLink: {
          template: '<a><slot /></a>',
        },
      },
    },
  })
}

describe('widget: home', () => {
  it('should be defined', () => {
    expect(Home).toBeDefined()
  })

  it('should render', () => {
    const wrapper = mountHome()
    expect(wrapper.exists()).toBe(true)
    wrapper.unmount()
  })

  it('should have three rotated headings', () => {
    const wrapper = mountHome()
    const headings = wrapper.findAll('h2')
    expect(headings.length).toBe(3)
    headings.forEach((heading) => {
      expect(heading.classes()).toContain('rotated')
    })
    wrapper.unmount()
  })

  it('should be accessible', () => {
    const wrapper = mountHome()
    checkA11y(wrapper.html(), true)
    wrapper.unmount()
  })
})
