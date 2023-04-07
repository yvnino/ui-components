import { createStory } from '../../test'

import Button from './Button'

export default {
  title: '/Button',
  component: Button,
}

export const Default = createStory(Button, {}, 'Click Me')

export const outlined = createStory(Button, {
  variant: 'outlined',
}, 'Click Me')

export const Contained = createStory(Button, {
  variant: 'contained',
}, 'Click Me')

export const ContainedDisabled = createStory(Button, {
  variant: 'contained',
  disabled: true
}, 'Click Me')

export const outlinedDisabled = createStory(Button, {
  variant: 'outlined',
  disabled: true
}, 'Click Me')

export const Loading = createStory(Button, {
  variant: 'contained',
  loading: true
}, 'Click Me')
