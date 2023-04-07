import React from 'react'
import {
  useField,
  FieldProps as FinalFieldProps,
  FieldRenderProps
} from 'react-final-form'

import BaseRadioGroup, { Props as BaseRadioGroupProps } from '../../inputs/RadioInput/RadioGroup'
import { Props as RadioButtonProps } from '../../inputs/RadioInput/RadioButton'
import FormField from '../FormField'

export type FieldProps<TInputValue> = FinalFieldProps<
  TInputValue,
  FieldRenderProps<TInputValue, HTMLInputElement>,
  HTMLInputElement
>

export type Props = BaseRadioGroupProps & FieldProps<RadioButtonProps['value']>

export const RadioGroup = (props: Props) => {
  const { children, ...rest } = props
  const { meta, input } = useField(rest.name, { type: 'radio' })
  const error = meta.touched ? (meta.error || meta.submitError) : ''

  return (
    <FormField error={error}>
      <BaseRadioGroup {...rest} {...input}>
        {React.Children.toArray(children)
          .filter(React.isValidElement)
          .map(child =>
            React.cloneElement(child, {
              name: props.name
            } as any)
          )}
      </BaseRadioGroup>
    </FormField>
  )
}

export default RadioGroup
