import React from 'react'
import {
  useField,
  FieldProps as FinalFieldProps,
  FieldRenderProps
} from 'react-final-form'

import BaseRadioButton, { Props as RadioButtonProps } from '../../inputs/RadioInput/RadioButton'

export type FieldProps<TInputValue> = FinalFieldProps<
  TInputValue,
  FieldRenderProps<TInputValue, HTMLInputElement>,
  HTMLInputElement
>

export type Props = RadioButtonProps & {
  name?: string
}

export const RadioButton = (props: Props) => {
  const { input } = useField(props.name ?? '', { type: 'radio' })

  return (
    <BaseRadioButton {...props} checked={input.checked} />
  )
}

export default RadioButton
