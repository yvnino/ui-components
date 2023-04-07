import { createStory } from '../../../test'
import DatePicker from './'

export default {
  title: '/core/inputs/DatePicker',
  component: DatePicker
}

export const Default = createStory(DatePicker, {
  value: new Date('06-10-2022'),
  label: 'Date Picker',
  onChange: (date) => { console.log('dateeee', date) },
  name: 'someName'
})

export const NoWeekends = createStory(DatePicker, {
  label: 'Date Picker',
  onChange: (date) => { console.log('dateee', date) },
  disableWeekends: true
})

export const NoTimeInput = createStory(DatePicker, {
  label: 'Date Picker',
  onChange: (date) => { console.log('dateee', date) },
  showTimeInput: false
})
