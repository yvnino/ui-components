import React from 'react'
import {
  useField,
  FieldProps as FinalFieldProps,
  FieldRenderProps
} from 'react-final-form'

import BaseInput, { Props as BaseInputProps } from '../../inputs/TextInput'
import FormField from '../FormField'

export type FieldProps<TInputValue> = FinalFieldProps<
  TInputValue,
  FieldRenderProps<TInputValue, HTMLInputElement>,
  HTMLInputElement
>

export type Props = BaseInputProps & {
  name: string
  type?: string
}

export const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { meta, input } = useField(props.name)

  return (
    <FormField error={meta.error || meta.submitError}>
      <BaseInput variant='outlined' {...input} {...props} ref={ref} />
    </FormField>
  )
})

export default Input
