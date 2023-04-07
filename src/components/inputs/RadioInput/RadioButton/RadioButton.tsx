import React from 'react'
import { withStyles } from '@mui/styles'
import Radio, { RadioProps } from '@mui/material/Radio'
import FormControlLabel from '@mui/material/FormControlLabel'

import * as S from './styles'

const StyledRadio = withStyles(S.RadioButton)(FormControlLabel)

export interface Props extends RadioProps {
  label: string
  value: string
}

const RadioButton = ({ label, value }: Props) => {
  return (
    <StyledRadio
      value={value}
      control={<Radio color='primary' />}
      label={label}
      labelPlacement='end'
    />
  )
}

export default RadioButton
