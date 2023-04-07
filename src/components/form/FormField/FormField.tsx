import React from 'react'
import { makeStyles } from '@mui/styles'

import FormHint from '../FormHint'
import FormError from '../FormError'
import styles from './styles'

export interface Props {
  hint?: string
  error?: string
  children: React.ReactNode
  required?: boolean
}

const useStyles = makeStyles(styles)

export const FormField: React.FC<Props> = (
  { children, error, required, hint }
) => {
  const classes = useStyles()

  return (
    <div
      className={classes.root}
    >
      {required && <span className={classes.asterisk}>*</span>}
      {children}
      {error && <FormError>{error}</FormError>}
      {hint && <FormHint>{hint}</FormHint>}
    </div>
  )
}

export default FormField
