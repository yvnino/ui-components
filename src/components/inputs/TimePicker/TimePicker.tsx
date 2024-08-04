import React, { useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import { Box } from '@mui/material'
import { TimePicker, TimePickerProps } from '@mui/x-date-pickers/TimePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

const BaseTimePicker = (props: TimePickerProps<Dayjs, any>) => {
  const [value, setValue] = useState<Dayjs | null>(
    dayjs(props.defaultValue),
  )

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue)
  }

  console.log('BaseTimePicker===props.value', props.value)

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box>
      <TimePicker
        label="Time"
        value={value}
        onChange={handleChange}
        {...props}
      />
      </Box>
    </LocalizationProvider>
  )
}

export default BaseTimePicker
