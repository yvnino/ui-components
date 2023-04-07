import React from 'react'
import { createStory } from '../../../test'
import Select from './'

const SELECT_OPTIONS = [
  {
    value: '1',
    text: 'option #1'
  },
  {
    value: '2',
    text: 'option #2'
  },
  {
    value: '3',
    text: 'option #3'
  },
  {
    value: '4',
    text: 'option #4'
  }
]


export default {
  title: '/core/inputs/Select',
  component: Select
}

export const Default = createStory(Select, {
  options: SELECT_OPTIONS,
  style: {
    width: '300px'
  }
})
