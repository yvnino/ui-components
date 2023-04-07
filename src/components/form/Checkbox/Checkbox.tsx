import React from 'react'
import { useField } from 'react-final-form'
import { CheckboxProps } from '@mui/material/Checkbox'

import BaseCheckbox from '../../inputs/Checkbox'
import FormField from '../FormField'

export type Props = CheckboxProps & {
  name: string
  onChangeData?: any
  label?: string
}

export const Checkbox = (props: Props) => {
  const { input, meta } = useField(props.name, { type: 'checkbox' })
  const error = meta.touched ? (meta.error || meta.submitError) : ''

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    input.onChange(e.target.checked ? (props.onChangeData ?? e) : e)
  
    if (props.onChange) {
      props.onChange(e, checked)
    }
  }

  return (
    <FormField error={error}>
      <BaseCheckbox {...props} checked={input.checked} onChange={handleOnChange} />
    </FormField>
  )
}

export default Checkbox
