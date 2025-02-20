import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { axe } from 'vitest-axe'
import { checkA11y } from '~/test/utils'
import Footer from './Footer.vue'

function mountFooter() {
  return mount(Footer, {
    global: {
      stubs: {
        RouterLink: {
          template: '<a />',
        },
      },
    },
  })
}

describe('shared: Footer', () => {
  it('should render the footer', async () => {
    const wrapper = await mountFooter()
    expect(wrapper.exists()).toBe(true)

    wrapper.unmount()
  })

  it('should render the footer signature', async () => {
    const wrapper = await mountFooter()
    const signature = wrapper.find('[data-testid="signature"]')
    const date = new Date().getFullYear()
    expect(signature.text()).toContain(`©${date} built and designed with ♥️ by me`)

    wrapper.unmount()
  })

  it('should render social links', async () => {
    const wrapper = await mountFooter()

    const links = wrapper.findAll('footer .icon-link')
    expect(links).toHaveLength(4)

    wrapper.unmount()
  })

  it('should be accessible', async () => {
    const wrapper = await mountFooter()
    checkA11y(wrapper.html())
    wrapper.unmount()
  })
})
