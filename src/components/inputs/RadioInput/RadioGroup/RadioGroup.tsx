import React from 'react'
import FormControl from '@mui/material/FormControl'
import MUIRadioGroup, { RadioGroupProps } from '@mui/material/RadioGroup'
import FormHelperText from '@mui/material/FormHelperText'

export interface Props extends RadioGroupProps {
  horizontal?: boolean
  errMsg?: string
  value?: string
  children: React.ReactNode
}

const RadioGroup = ({
  children, horizontal, value, errMsg, ...rest
}: Props) => {
  const childrenArr = React.Children.toArray(children)

  return (
    <FormControl style={{ minWidth: '100%' }} component='fieldset' error={!!errMsg}>
      <MUIRadioGroup
        id='radioGroup'
        value={value}
        row={horizontal}
        style={{ justifyContent: 'space-evenly' }}
        {...rest}
      >
        {childrenArr}
      </MUIRadioGroup>
      {errMsg ? <FormHelperText style={{ display: 'flex', paddingRight: '30px' }}>{errMsg}</FormHelperText> : null}
    </FormControl>
  )
}

export default RadioGroup
