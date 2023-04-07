import {
  createTheme,
} from '@mui/material/styles'

import {
  PaletteMode
} from '@mui/material'

import {
  palette,
  typography,
  paletteDark
} from '../config'
import { useDarkModeContext } from '../../DarkModeProvider/context/DarkModeContext'

const ThemeUI = {
  typography,
  props: {
    MuiButtonBase: {
      disableRipple: true
    },
    MuiList: {
      disablePadding: true
    },
    MuiPaper: {
      square: true
    },
    MuiOutlinedInput: {
      notched: false
    }
  }
}

const UIProvider = (themePalette = palette) => createTheme({...ThemeUI, palette: themePalette})

const useBrandTheme = () => {
  const { isDark, mode } = useDarkModeContext()

  const brandPalette = {
    ...(isDark ? {
      ...paletteDark,
    } : palette),
    mode
  }

  return [UIProvider(brandPalette)]
}

export default useBrandTheme
