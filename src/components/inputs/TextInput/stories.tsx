import React from 'react'
import { createStory } from '../../../test'
import { SearchGlass } from '../../Icons'
import TextInput from './'

export default {
  title: '/inputs/Text',
  component: TextInput
}

export const Default = createStory(TextInput, {
  style: {
    width: '300px'
  },
  placeholder: 'This is placeholder'
})

export const BottomBorder = createStory(TextInput, {
  onlyBottomBorder: true,
  style: {
    width: '300px'
  },
  InputProps: {
    startAdornment: <SearchGlass />
  }
})
