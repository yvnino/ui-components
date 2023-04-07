import React from 'react'
import { makeStyles } from '@mui/styles'

import Typography from '../../Typography'
import styles from './styles'

const useStyles = makeStyles(styles)

export interface Props {
  children: React.ReactNode
}

export const FormError  = (
  { children }: Props
) => {
  const classes = useStyles()

  return (
    <div
      className={classes.root}
    >
      <Typography className={classes.error}>{children}</Typography>
    </div>
  )
}

export default FormError
