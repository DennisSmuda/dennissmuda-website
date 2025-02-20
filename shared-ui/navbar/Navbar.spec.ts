import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { axe } from 'vitest-axe'
import { checkA11y } from '~/test/utils'
import Logo from './Logo.vue'
import Navbar from './Navbar.vue'

function mountNavbar() {
  return mount(Navbar, {
    global: {
      stubs: {
        RouterLink: true,
      },
    },
  })
}

describe('shared: Navbar', () => {
  it('should be defined', () => {
    expect(Navbar).toBeDefined()
  })

  it('should render correctly', () => {
    const wrapper = mountNavbar()
    expect(wrapper.exists()).toBe(true)
    wrapper.unmount()
  })

  it('should render the logo', () => {
    const wrapper = mountNavbar()
    const logo = wrapper.findComponent(Logo)
    expect(logo.exists()).toBe(true)
    wrapper.unmount()
  })

  it('should render the navigation links', () => {
    const wrapper = mountNavbar()
    const links = wrapper.findAllComponents({ name: 'RouterLink' })
    expect(links.length).toBe(4)
    wrapper.unmount()
  })

  it('should be accessible', async () => {
    const wrapper = await mountNavbar()
    checkA11y(wrapper.html())
    wrapper.unmount()
  })
})
