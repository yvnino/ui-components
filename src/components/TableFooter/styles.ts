import { createStyles } from '@mui/styles'

import palette from '../ThemeProvider/config/palette'

export default () =>
  createStyles({
    root: {
      borderTop: `1px solid ${palette.grey[100]}`
    }
  })
