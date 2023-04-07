import React from 'react'
import { useField } from 'react-final-form'
import { SwitchProps } from '@mui/material/Switch'

import BaseSwitch from '../../inputs/Switch'
import FormField from '../FormField'

export type Props = SwitchProps & {
  name: string
  onChangeData?: any
  label?: string
}

export const Switch = (props: Props) => {
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
      <BaseSwitch {...props} checked={input.value} onChange={handleOnChange} />
    </FormField>
  )
}

export default Switch
