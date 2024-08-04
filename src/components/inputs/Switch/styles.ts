import { createStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'

import palette, { colors } from '../../ThemeProvider/config/palette'

export const Switch = (theme: Theme) => createStyles({
  labelRoot: {
    borderTop: 'none !important',
    margin: 0,
    display: 'flex !important',
    padding: '0 !important'
  },
  root: {
    width: '42px !important',
    height: '24px !important',
    padding: 0,
    margin: 0,
  },
  switchBase: {
    padding: 1,
    width: 'auto !important',
    height: 'auto !important',
    top: 2,
    left: 2,
    '&$checked': {
      transform: 'translateX(16px)',
      color: `${palette.common.black} !important`,
      '& + $track': {
        backgroundColor: palette.common.white,
        opacity: 1,
        border: 'none',
      }
    },
    '&$checked + $thumb': {
      backgroundColor: palette.common.black,
      color: `${palette.common.black} !important`,
    },
    '&$focusVisible $thumb': {
      color: palette.common.black,
      backgroundColor: palette.common.black,
      // border: '6px solid #fff',
    },
  },
  thumb: {
    width: '18px !important',
    height: '18px !important',
    boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.16)',
    borderRadius: 2,
  },
  track: {
    borderRadius: 2,
    // border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: '#d7d7db',
    opacity: 1,
    transition: theme?.transitions?.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
})
