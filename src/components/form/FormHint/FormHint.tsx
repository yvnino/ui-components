import React, { ReactNode } from 'react'
import { makeStyles } from '@mui/styles'

import Typography from '../../Typography'
import styles from './styles'

export interface Props {
  children: ReactNode
}

const useStyles = makeStyles(styles)

export const FormHint = (
  { children }: Props
) => {
  const classes = useStyles()

  return (
    <div
      className={classes.root}
    >
      <Typography className={classes.hint}>{children}</Typography>
    </div>
  )
}

export default FormHint
