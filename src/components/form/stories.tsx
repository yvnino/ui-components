import React, { useState } from 'react'
import { createStory } from '../../test'
import { Box } from '@mui/material'
import {
  Form,
  FormInput,
  FormRadioGroup,
  FormRadioButton,
  FormCheckbox,
  FormSelect,
  FormDatePicker,
  FormSubmitButton,
  FormSwitch,
  FormTimePicker,
} from './'

const INIT = {
  test: 'testVal',
  test2: 2,
  radio: undefined,
  checkboxTest: false,
  date: new Date('2023-12-10'),
  switchTest: false
}

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

const TestForm = () => {
  const [formValues, setFormValues] = useState()
  const validateForm = (data: any) => {
    let vlidationsError = {}

    if (typeof data.radio === 'undefined') {
      vlidationsError = {
        ...vlidationsError,
        radio: 'required'
      }
    }

    if (!data.checkboxTest) {
      vlidationsError = {
        ...vlidationsError,
        checkboxTest: 'must be true'
      }
    }

    return vlidationsError
  }

  const handleSubmit = (values: any) => {
    setFormValues(values)
  }

  return (
    <Box width='400px'>
      <Form
        onSubmit={handleSubmit}
        initialValues={INIT}
        validate={validateForm}
      >
        <FormInput name='test' label='Test input' />
        <FormInput name='test2' type='number' label='Test number input' />
        <FormRadioGroup name='radio' horizontal>
          <FormRadioButton value='radioA' label='radio A' />
          <FormRadioButton value='radioB' label='radio B' />
        </FormRadioGroup>
        <FormCheckbox size='small' name='checkboxTest' label='Checkbox A' />
        <br />
        <FormSwitch name='switchTest' label={`${'\b  '}Switch input`} />
        <br />
        <FormSelect options={SELECT_OPTIONS} name='selectTest' label='Choose' />
        <br />
        <FormDatePicker name='date' label='Date Picker' />
        <br />
        <FormTimePicker name='time' label='Time Picker' />
        <FormSubmitButton>
          Submit
        </FormSubmitButton>
      </Form>
      {
        !!formValues && (
          <Box>
            {JSON.stringify(formValues)}
          </Box>
        )
      }
    </Box>
  )
}

export default {
  title: '/Form',
  component: TestForm
}

export const BasicForm = createStory(TestForm, {
})