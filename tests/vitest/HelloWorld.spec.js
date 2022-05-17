import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld', () => {
  it('says Hello World', () => {
    const wrapper = shallowMount(HelloWorld)

    expect(wrapper.text()).toContain('Hello World')
  })

  it('has an empty counter', async () => {
    const wrapper = shallowMount(HelloWorld)
    const counter = 0

    await wrapper.setData({ count: counter })

    expect(wrapper.find('button').text()).toContain('count is: ' + counter)
    expect(wrapper.find('.sky').exists()).toBe(false)
  })

  it('has a reached the sky with a counter', async () => {
    const wrapper = shallowMount(HelloWorld)
    const counter = 7

    await wrapper.setData({ count: counter })

    expect(wrapper.find('button').text()).toContain('count is: ' + counter)
    expect(wrapper.find('.sky').exists()).toBe(true)
    expect(wrapper.find('.sky').text()).toContain('You have reached the sky!')
  })
})
