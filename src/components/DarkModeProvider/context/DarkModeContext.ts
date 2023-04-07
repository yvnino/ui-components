import { createContext, useContext } from 'react'
import {
  PaletteMode
} from '@mui/material'

interface Props {
  setDarkMode: (dark: boolean) => void,
  isDark: boolean
  mode: PaletteMode
}

const DarkModeContext = createContext<Props>({
  setDarkMode: () => {},
  isDark: false,
  mode: 'light'
})

export const useDarkModeContext = () => useContext(DarkModeContext)

export default DarkModeContext
