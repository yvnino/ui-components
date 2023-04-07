import { createStyles } from '@mui/styles'

import palette from '../../ThemeProvider/config/palette'

export default () =>
  createStyles({
    root: {
      width: '100%',
      fontSize: '1rem',

      '& + &': {
        marginTop: '1.5em'
      },
      '& $error + $hint': {
        marginTop: 0
      }
    },

    hint: {},

    error: {},
    asterisk: {
      marginRight: '0.3125em',
      color: palette.error.main,
      fontSize: '0.875em'
    }
  })
