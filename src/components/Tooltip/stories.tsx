import React from 'react'
import { createStory } from '../../test'
import Tooltip from './'

export default {
  title: '/Tooltip',
  component: Tooltip
}

export const Default = createStory(Tooltip, {
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
})
