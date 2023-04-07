import {
  ThemeProvider as ThemeProviderMUI
} from '@mui/material/styles'
import React from 'react'

import useBrandTheme from './hooks/useBrandTheme'

import './fonts.css'

interface Props {
  children?: React.ReactNode
}

const ThemeProvider = ({
  children
}: Props) => {
  const [theme] = useBrandTheme()

  return (
    <ThemeProviderMUI theme={theme}>
      {children}
    </ThemeProviderMUI>
  )
}

export default ThemeProvider
