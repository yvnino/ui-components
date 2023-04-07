import React from 'react'
import {
  useField,
  FieldProps as FinalFieldProps,
  FieldRenderProps
} from 'react-final-form'

import BaseAutocomplete, { Props as AutocompleteProps } from '../../inputs/Autocomplete'
import FormField from '../FormField'

export type FieldProps<TInputValue> = FinalFieldProps<
  TInputValue,
  FieldRenderProps<TInputValue, HTMLInputElement>,
  HTMLInputElement
>

export type Props = AutocompleteProps & FieldProps<AutocompleteProps['value']>

export const Autocomplete = (props: Props) => {
  const { meta, input } = useField(props.name)
  const error = meta.touched && (meta.error || meta.submitError)

  const handleOnSelect = (data: any) => {
    input.onChange(data)
  }

  return (
    <FormField error={error}>
      <BaseAutocomplete {...props} {...input} value={input.value?.name || ''} name={input.name} onSelect={handleOnSelect} error={error} />
    </FormField>
  )
}

export default Autocomplete
