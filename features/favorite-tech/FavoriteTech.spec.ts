import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import FavoriteTech from './FavoriteTech.vue'

const NUMBER_OF_TAGS = 19

describe('feature: FavoriteTech', () => {
  it('should be defined', () => {
    expect(FavoriteTech).toBeDefined()
  })

  it('should render correctly', () => {
    const wrapper = mount(FavoriteTech)
    expect(wrapper.exists()).toBe(true)
    wrapper.unmount()
  })

  it(`should display ${NUMBER_OF_TAGS} tags`, () => {
    const wrapper = mount(FavoriteTech)
    const tags = wrapper.findAll('.tag')
    expect(tags.length).toBe(NUMBER_OF_TAGS)
    wrapper.unmount()
  })
})
