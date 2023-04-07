import { createStory } from '../../test'

import Typography from './Typography'

export default {
  title: '/Typography',
  component: Typography,
}

export const Default = createStory(Typography, {}, 'Typography')

export const Secondary = createStory(Typography, {
  color: 'secondary',
}, 'Typography')
