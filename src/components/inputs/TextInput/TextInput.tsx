import React from 'react'
import { makeStyles } from '@mui/styles'
import TextField, { TextFieldProps } from '@mui/material/TextField'

import LabelWrapper, { Props as LabelProps } from '../LabelWrapper'
import * as S from './styles'

const useStyles = makeStyles(S.StyledInput)

export type Props = TextFieldProps & {
  labelProps?: LabelProps
  onlyBottomBorder?: boolean
}

const TextInput = ({ label, labelProps, onlyBottomBorder, variant = 'outlined', ...rest }: Props) => {
  const classes = useStyles()

  return (
    <LabelWrapper label={label} { ...labelProps }>
      <TextField
        variant={variant}
        {...rest}
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
}

export default TextInput
