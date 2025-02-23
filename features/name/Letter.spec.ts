import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Letter, { LETTER_START_Y } from './Letter.vue'

const delay = (ms: number) => new Promise(r => setTimeout(r, ms))

function mountLetter(delay = 0) {
  return mount(Letter, {
    props: {
      path: 'M 0 0 L 100 0 L 100 100 L 0 100 Z',
      delay,
    },
  })
}

describe('feature: Letter', () => {
  it('should be defined', () => {
    expect(Letter).toBeDefined()
  })

  it('should render', () => {
    const wrapper = mountLetter()
    expect(wrapper.exists()).toBe(true)
    wrapper.unmount()
  })

  it('should render the path', () => {
    const wrapper = mountLetter()
    const path = wrapper.find('path')

    expect(path.attributes('d')).toBe('M 0 0 L 100 0 L 100 100 L 0 100 Z')
    wrapper.unmount()
  })

  it('should animate transform (y-position) after delay', async () => {
    const wrapper = mountLetter(100)
    const path = wrapper.find('path')
    expect(path.attributes('style')).toContain(`translate3D(0%, ${LETTER_START_Y}%, 0px)`)

    await delay(120)
    expect(path.attributes('style')).not.toContain(`translate3D(0%, ${LETTER_START_Y}%, 0px)`)

    wrapper.unmount()
  })

  it('should rotate the path on mouse enter and rotate back on mouse leave', async () => {
    const wrapper = mountLetter()
    const path = wrapper.find('path')

    expect(path.attributes('style')).toContain('rotate: 0deg')
    wrapper.trigger('mouseenter')
    await delay(100)
    expect(path.attributes('style')).not.toContain('rotate: 0deg')

    const style = path.attributes('style') as string
    const rotationPattern = /rotate: (-?\d+(?:\.\d*)?)deg/
    const match = style.match(rotationPattern)
    const rotation = match ? Number.parseFloat(match[1]) : 0

    wrapper.trigger('mouseleave')
    await delay(100)
    expect(path.attributes('style')).not.toContain(`rotate(${rotation}deg)`)

    wrapper.unmount()
  })
})
