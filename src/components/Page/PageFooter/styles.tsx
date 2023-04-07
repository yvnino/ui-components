import { createStyles } from '@mui/styles'

import palette from '../../ThemeProvider/config/palette'

export default () =>
  createStyles({
    root: {
      flex: 1,
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '60px',
      backgroundColor: palette.primary.main
    },
    content: {
      height: '100%',
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: '68rem',
      padding: '0 1rem',
      color: palette.common.white
    },
    wide: {
      maxWidth: '90rem',
    },
    fullWidth: {
      maxWidth: '100%'
    },
    flex: {
      display: 'flex'
    }
  })
