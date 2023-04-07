import React, { useState } from 'react'
import {
  PaletteMode
} from '@mui/material'

import DarkModeContext from './context/DarkModeContext'

interface Props {
  children?: React.ReactNode
}

const DarkModeProvider = ({
  children
}: Props) => {
  const [isDarkMode, toggleDarkMode] = useState<boolean>(true)

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
