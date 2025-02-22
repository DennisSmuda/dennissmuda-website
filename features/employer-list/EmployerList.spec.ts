import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import EmployerList from './EmployerList.vue'

const NUMBER_OF_EMPLOYERS = 3

describe('feature: FavoriteTech', () => {
  it('should be defined', () => {
    expect(EmployerList).toBeDefined()
  })

  it('should render correctly', () => {
    const wrapper = mount(EmployerList)
    expect(wrapper.exists()).toBe(true)
    wrapper.unmount()
  })

  it(`should display ${NUMBER_OF_EMPLOYERS} employer links`, () => {
    const wrapper = mount(EmployerList)
    const tags = wrapper.findAll('a')
    expect(tags.length).toBe(NUMBER_OF_EMPLOYERS)
    wrapper.unmount()
  })
})
