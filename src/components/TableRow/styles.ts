import { createStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'

import palette, { colors } from '../ThemeProvider/config/palette'

export default ({ transitions }: Theme) =>
  createStyles({
    root: {
      height: 'auto',
      borderBottom: `0 !important`,
      '&$selected': {
        backgroundColor: `${colors.grey.lightest} !important`,
        '&:hover': {
          backgroundColor: `${colors.grey.lightest} !important`
        }
      },

      '&$hover:hover': {
        backgroundColor: colors.blue.lightest
      }
    },
    bordered: {
      borderBottom: `1px solid ${colors.grey.lightest} !important`,
      backgroundColor: `${palette.common.white} !important !important`
    },
    transparent: {
      borderBottom: `1px solid ${colors.grey.lightest} !important`,
      backgroundColor: `transparent !important`
    },
    stripeEven: {
      background: `${colors.grey.lightest} !important`
    },
    hover: {
      transition: transitions?.create('background-color', {
        duration: transitions?.duration.shortest
      })
    },
    selected: {}
  })
