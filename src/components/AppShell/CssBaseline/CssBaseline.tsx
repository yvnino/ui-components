import React from 'react'
import CssBaselineMUI from '@mui/material/CssBaseline'
import { makeStyles } from '@mui/styles'

import styles from './styles'

const useStyles = makeStyles(styles, {
  name: 'GlobalCssBaseline',
})

const CssBaseline = () => {
  // useStyles()

  return <CssBaselineMUI />
}

export default CssBaseline
