import React from 'react'
import {
  useField,
  FieldProps as FinalFieldProps,
  FieldRenderProps
} from 'react-final-form'

import BaseSelect, { Props as BaseSelectProps } from '../../inputs/Select'
import FormField from '../FormField'

export type FieldProps<TInputValue> = FinalFieldProps<
  TInputValue,
  FieldRenderProps<TInputValue, HTMLInputElement>,
  HTMLInputElement
>

export type Props = BaseSelectProps & FieldProps<BaseSelectProps['value']>

export const Select = (props: Props) => {
  const { meta, input } = useField(props.name)
  const error = meta.touched && (meta.error || meta.submitError)

  return (
    <FormField error={error} hint={props.hint}>
      <BaseSelect {...props} labelProps={{ label: props.label, ...(props.labelProps || {}) }} {...input} name={input.name} error={!!error} />
    </FormField>
  )
}

export default Select
