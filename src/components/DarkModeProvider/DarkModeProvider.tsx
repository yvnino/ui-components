import React, { useState } from 'react'
import {
  PaletteMode
} from '@mui/material'

import DarkModeContext from './context/DarkModeContext'

interface Props {
  children?: React.ReactNode,
  initState?: boolean
}

const DarkModeProvider = ({
  children, initState,
}: Props) => {
  const [isDarkMode, toggleDarkMode] = useState<boolean>(!!initState)

  return (
    <DarkModeContext.Provider
      value={{
        isDark: isDarkMode,
        setDarkMode: toggleDarkMode,
        mode: isDarkMode ? 'dark' : 'light'
      }}
    >
      {children}
    </DarkModeContext.Provider>
  )
}

export default DarkModeProvider
