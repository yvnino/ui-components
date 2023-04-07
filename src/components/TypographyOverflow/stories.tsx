import { createStory } from '../../test'
import TypographyOverflow from './'

export default {
  title: '/TypographyOverflow',
  component: TypographyOverflow
}

export const Overflow = createStory(TypographyOverflow, {
  style: { fontSize: '13px', width:  170 }
}, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit')
