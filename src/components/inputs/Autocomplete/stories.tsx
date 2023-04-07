import { createStory } from '../../../test'
import Autocomplete from './'

export default {
  title: '/inputs/Autocomplete',
  component: Autocomplete
}

const MOCK_OPTIONS = [{
  name: 'Name #1',
  value: 1
}, {
  name: 'Name #2',
  value: 2
}, {
  name: 'Name #3',
  value: 3
}, {
  name: 'Name #4',
  value: 4
}]

export const Default = createStory(Autocomplete, {
  options: MOCK_OPTIONS,
  label: 'autocomplete'
})

export const Loading = createStory(Autocomplete, {
  loading: true,
  options: MOCK_OPTIONS,
  label: 'autocomplete'
})
