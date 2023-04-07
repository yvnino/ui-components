import React, { useState, forwardRef, useEffect } from 'react'
import ReactDatePicker from 'react-datepicker'

import TextInput from '../TextInput'
import TimePicker from '../TimePicker'
import LabelWrapper, { Props as LabelProps } from '../LabelWrapper'

import 'react-datepicker/dist/react-datepicker.css'
import './datepicket-override.css'

export interface Props {
  value?: Date
  label: string
  disablePast?: boolean
  onChange?: (date: Date | null) => void
  name?: string
  labelProps?: LabelProps
  error?: boolean
  disableWeekends?: boolean
  showTimeInput?: boolean
}


const DatePicker = ({
  value, label = '', showTimeInput = true, onChange, name, error, labelProps = {} as LabelProps, disableWeekends
}: Props) => {
  const [startDate, setStartDate] = useState<Date | null>(value || new Date())

  const PickerInput = forwardRef(({ value: textValue, onClick }: any, ref) => {
    return (
      <TextInput value={textValue} onClick={onClick} name={name} ref={ref as any} />
    )
  })

  const isWeekday = (date: Date) => {
    return ![0, 6].includes(date.getDay())
  }

  useEffect(() => {
    onChange?.(startDate)
  }, [startDate])

  return (
    <LabelWrapper direction='column' {...labelProps} label={label}>
      <ReactDatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeInput={showTimeInput}
        customInput={<PickerInput name={name} />}
        dateFormat={showTimeInput ? 'yyyy-MM-dd, HH:mm' : 'yyyy-MM-dd'}
        filterDate={disableWeekends ? isWeekday : undefined}
        customTimeInput={showTimeInput ? <TimePicker /> : null}
      />
    </LabelWrapper>
  )
}

export default DatePicker
