import React from 'react'
import { createStory } from '../../../test'
import { RadioGroup, RadioButton } from './'

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

const Example = (props: Omit<React.ComponentProps<typeof RadioGroup>, 'children'>) => {
  return (
    <RadioGroup name='radio' horizontal {...props}>
      <RadioButton value='radioA' label='radio A' />
      <RadioButton value='radioB' label='radio B' />
    </RadioGroup>
  )
}


export default {
  title: '/core/inputs/Radio',
  component: Example
}

export const Default = createStory(Example, {
  style: {
    width: '400px'
  }
})

export const Column = createStory(Example, {
  row: false,
  style: {
    width: '400px'
  }
})
