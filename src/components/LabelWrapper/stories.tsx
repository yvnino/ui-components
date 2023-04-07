import React from 'react'
import { createStory } from '../../test'

import LabelWrapper from './'

export default {
  title: '/LabelWrapper',
}

// By passing optional props to this story, you can control the props of the component when
// you consume the story in a test.
export const Harizontal = createStory(LabelWrapper, {
  label: 'label',
}, 'Some Input')

export const Vertical = createStory(LabelWrapper, {
  label: 'label',
  direction: 'column',
}, 'Some Input')
