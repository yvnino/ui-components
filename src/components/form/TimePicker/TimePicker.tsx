import React from 'react'
import { useField } from 'react-final-form'
import dayjs, { Dayjs } from 'dayjs'

import BaseTimePicker from '../../inputs/TimePicker'
import FormField from '../FormField'

export type Props = React.ComponentProps<typeof BaseTimePicker> & {
  name: string
  label?: string
  onChange?: (val: Dayjs | null) => void
}

export const TimePicker = (props: Props) => {
  const { input, meta } = useField(props.name)
  const error = meta.touched ? (meta.error || meta.submitError) : ''

  const handleOnChange = (val: dayjs.Dayjs | null) => {

    input.onChange({
      hour: val?.hour(),
      min: val?.minute(),
    })
  
    props.onChange?.(val)
  }

  const value = dayjs().hour(input.value?.hour)?.minute?.(input.value?.min)

  return (
    <FormField error={error}>
      <BaseTimePicker {...props} value={value} onChange={handleOnChange} />
    </FormField>
  )
}

export default TimePicker
