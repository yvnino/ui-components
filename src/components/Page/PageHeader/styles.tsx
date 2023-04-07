import { createStyles } from '@mui/styles'

import palette, { colors } from '../../ThemeProvider/config/palette'

export const headerHeight = { default: '4.5rem', smallAndMedium: '3rem' }

export default () =>
  createStyles({
    light: {
      backgroundColor: palette.common.white
    },
    dark: {
      backgroundColor: colors.black.lighter
    },
    content: {
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      margin: '0 auto',
      justifyContent: 'space-between',
      maxWidth: '90rem',
      padding: `0 '1rem'`,
      height: headerHeight.default,
    },
    wrapper: {
      height: headerHeight.default,
    },
    wide: {
      maxWidth: '68rem'
    },
    fullWidth: {
      maxWidth: '100%'
    },
    left: {
      display: 'flex',
      alignItems: 'center'
    },
    center: {
      display: 'flex',
      alignItems: 'center',
      alignSelf: 'center'
    },
    right: {
      display: 'flex',
      alignItems: 'center'
    },
    divider: {
      width: '1px',
      height: '1.75em',
      backgroundColor: palette.common.white,
      opacity: 0.8
    },
    logoContainer: {
    },
    logo: {
      width: '180px',
      height: '100%'
    }
  })
