import { createStyles } from '@mui/styles'

import { colors } from '../../ThemeProvider/config/palette'

export default createStyles({
  root: {
    marginTop: '0.25em',
    color: colors.red.main
  },
  error: {
    color: colors.red.main,
    fontSize: '0.7em',
    cursor: 'default'
  }
})
