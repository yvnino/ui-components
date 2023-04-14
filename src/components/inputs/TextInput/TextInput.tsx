import React, { forwardRef } from 'react'
import { makeStyles } from '@mui/styles'
import TextField, { TextFieldProps } from '@mui/material/TextField'

import LabelWrapper, { Props as LabelProps } from '../LabelWrapper'
import * as S from './styles'

const useStyles = makeStyles(S.StyledInput)

export type Props = TextFieldProps & {
  labelProps?: LabelProps
  onlyBottomBorder?: boolean
}

const TextInput = forwardRef<HTMLInputElement, Props>(function TextInput(props, ref) {
  const {
    label, labelProps, onlyBottomBorder, variant = 'outlined', ...rest
  } = props
  const classes = useStyles()

  return (
    <LabelWrapper label={label} { ...labelProps }>
      <TextField
        variant={variant}
        {...rest}
        ref={ref}
        FormHelperTextProps={{
          ...(rest.FormHelperTextProps || {}),
          className: classes.helper
        }}
        InputProps={{
          ...(rest.InputProps || {}),
          className: classes.input
        }}
        inputProps={{
          ...(rest.inputProps || {})
        }}
        className={onlyBottomBorder ? classes.inputOnlyBottomBorder : classes.root}
      />
    </LabelWrapper>
  )
})

export default TextInput
