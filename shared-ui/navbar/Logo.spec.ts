import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { checkA11y, delay } from '~/test/utils'
import Logo, { INITIAL_SCALE } from './Logo.vue'

function mountLogo() {
  return mount(Logo, {
    global: {
      stubs: {
        RouterLink: {
          template: '<a><slot /></a>',
        },
      },
    },
  })
}

describe('shared: Logo', () => {
  it('should be defined', () => {
    expect(Logo).toBeDefined()
  })

  it('should render', async () => {
    const wrapper = await mountLogo()
    expect(wrapper.exists()).toBe(true)
    wrapper.unmount()
  })

  it('should animate the logo dot on mouse enter and animate back on mouse leave', async () => {
    const wrapper = await mountLogo()
    const dot = wrapper.find('span')

    // has dot with initial scale
    expect(dot.exists()).toBe(true)
    expect(dot.attributes('style')).toContain(`scale(${INITIAL_SCALE})`)

    // Animate on mouse enter
    await wrapper.trigger('mouseenter')
    await delay(5)
    expect(dot.attributes('style')).not.toContain(`scale(${INITIAL_SCALE})`)
    const scale = Number.parseFloat(dot.attributes('style')!.split('scale(')[1].split(')')[0])

    // Animate back on mouse leave
    await wrapper.trigger('mouseleave')
    await delay(5)
    expect(dot.attributes('style')).not.toContain(`scale(${scale})`)

    wrapper.unmount()
  })

  it('should be accessible', async () => {
    const wrapper = await mountLogo()
    checkA11y(wrapper.html(), true)
    wrapper.unmount()
  })
})
