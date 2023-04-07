import { Palette, PaletteColor, CommonColors } from '@mui/material/styles'

interface ColorPalette extends PaletteColor {
  lightest?: string
  lighter?: string
  light2?: string
}

interface ColorItem {
  [key: string]: Partial<ColorPalette>
}

export const colors: ColorItem = {
  grey: {
    lightest: '#f1f1f1',
    lighter: '#c9c9cf', // #e5e5e5
    light: '#e5e5e5',
    light2: '#fafafa',
    main: '#777',
    dark: '#5f5f5f'
  },
  blue: {
    light: '#74c6be',
    main: '#2ba6cb',
    dark: '#144767'
  },
  black: {
    lighter: '#242428',
    light: '#494950',
    main: '#18181b',
    dark: '#000000'
  },
  white: {
    light: '#fff',
    main: '#fff',
    dark: '#fff'
  },
  red: {
    light: '#ff7070',
    main: '#FF8A80',
    dark: '#E23D2F'
  }
}

const commonColors: CommonColors = {
  black: '#000',
  white: '#fff'
}

const DARK_MODE = '#242428'

const sharedPalette: Palette = {
  ...JSON.parse(JSON.stringify(colors)),
  primary: JSON.parse(JSON.stringify(colors.black)),
  secondary: JSON.parse(JSON.stringify(colors.grey)),
  error: JSON.parse(JSON.stringify(colors.red)),
  grey: {
    100: colors.grey.lighter,
    200: colors.grey.light,
    300: colors.grey.main,
    400: colors.grey.dark,
    500: colors.grey.dark,
    ...colors.grey
  },
  common: commonColors
}

export const palette = {
  ...sharedPalette,
  text: {
    primary: commonColors.black,
    secondary: '#444'
  },
  background: {
    default: commonColors.white,
    // dark: DARK_MODE
  }
}

export const paletteDark = {
  ...sharedPalette,
  primary: JSON.parse(JSON.stringify(colors.white)),
  text: {
    primary: commonColors.white,
    secondary: '#c9c9cf'
  },
  background: {
    default: DARK_MODE,
    paper: DARK_MODE
  }
}

export default palette
