import React, { ChangeEvent } from 'react'
import { makeStyles } from '@mui/styles'
import { Grid, Box, SelectChangeEvent } from '@mui/material'

import Select from '../Select'
import { Styled } from './styles'

const useStyles = makeStyles(Styled)

const timeOptions = (maxValue: number) => {
  const options: {value: string, text: string}[] = []

  for (let index = 0; index < maxValue; index++) {
    const prefix = index < 10 ? '0' : ''

    options.push({
      text: `${prefix}${index.toString()}`,
      value: `${prefix}${index.toString()}`
    })
  }

  return options
}

export interface TimePickerProps {
  date?: Date
  value?: string
  onChange?: (val: string) => void
}

const TimePicker = ({ value, onChange }: TimePickerProps) => {
  const classes = useStyles()
  const splited = value?.split(':') ?? ''

  const handleHours = (e: SelectChangeEvent<unknown>) => {
    onChange?.(`${e.target.value}:${splited[1]}`)
  }

  const handleMinutes = (e: SelectChangeEvent<unknown>) => {
    onChange?.(`${splited[0]}:${e.target.value}`)
  }

  return (
    <Grid container spacing={1} style={{ width: '100%' }} justifyContent='center'>
      <Grid item>
        <Select
          // classes={classes}
          textInputProps={{
            style: {
              paddingRight: 0
            }
          }}
          IconComponent={() => null}
          style={{
            width: '40px',
            height: '40px',
            fontSize: '12px',
            paddingRight: '0.5rem !important'
          }}
          value={splited[0]}
          options={timeOptions(24)}
          onChange={handleHours}
        />
      </Grid>
      <Grid item justifyContent='center' alignItems='center'>
        <Box display='flex' alignItems='center' height='100%'>
          {':'}
        </Box>
      </Grid>
      <Grid item>
        <Select
          // classes={classes}
          IconComponent={() => null}
          style={{
            width: '40px',
            height: '40px',
            fontSize: '12px',
            paddingRight: '0.5rem !important'
          }}
          value={splited[1]}
          options={timeOptions(60)}
          onChange={handleMinutes}
        />
      </Grid>
    </Grid>
  )
}

export default TimePicker
