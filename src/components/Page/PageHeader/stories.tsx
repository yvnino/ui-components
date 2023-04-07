import { createStory } from '../../../test'
import PageHeader from './'

export default {
  title: '/Page/Header',
  component: PageHeader
}

export const Default = createStory(PageHeader, {})

export const Light = createStory(PageHeader, {
  varient: 'light'
})
