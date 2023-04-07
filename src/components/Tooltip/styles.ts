import { createStyles } from '@mui/styles'

import { colors } from '../ThemeProvider/config/palette'

export const StyledTooltip = createStyles({
  root: {
    zIndex: 999999
  },
  icon: {
    color: colors.grey.main,
    fontSize: '1em'
  }
})
