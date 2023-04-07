import React from 'react'
import {
  useField,
  FieldProps as FinalFieldProps,
  FieldRenderProps
} from 'react-final-form'

import BaseDatePicker, { Props as BaseDatePickerProps } from '../../inputs/DatePicker'
import FormField from '../FormField'

export type FieldProps<TInputValue> = FinalFieldProps<
  TInputValue,
  FieldRenderProps<TInputValue, HTMLInputElement>,
  HTMLInputElement
>

export type Props = BaseDatePickerProps & FieldProps<BaseDatePickerProps['value']>

export const DatePicker = (props: Props) => {
  const { meta, input } = useField(props.name)
  const error = meta.touched && (meta.error || meta.submitError)

  return (
    <FormField error={error} hint={props.hint}>
      <BaseDatePicker {...props} {...input} name={input.name} error={!!error} />
    </FormField>
  )
}

export default DatePicker
