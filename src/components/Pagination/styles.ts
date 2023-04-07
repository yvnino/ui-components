import { createStyles } from '@mui/styles'

import palette from '../ThemeProvider/config/palette'

export default () =>
  createStyles({
    root: {
      justifyContent: 'center'
    },
    button: {
      boxShadow: 'none',
      margin: '0 2px'
    },
    selected: {
      backgroundColor: `${palette.primary.dark} !important`,
      color: `${palette.common.white} !important`
    }
  })
