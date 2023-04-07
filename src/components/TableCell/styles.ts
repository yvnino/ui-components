import { createStyles } from '@mui/styles'

import palette from '../ThemeProvider/config/palette'

const baseCellStyles = {
  fontSize: '12px',
  borderBottom: 'none'
}

const regularCellStyles = {
  ...baseCellStyles,
  padding: '0.5rem 1rem',
  height: '2.5rem',
  lineHeight: '1.25rem',

  '&:last-child': {
    paddingRight: '1.5rem'
  }
}

export default () =>
  createStyles({
    root: regularCellStyles,
    header: {
      fontWeight: 'bold',
      color: palette.text.primary,
      lineHeight: '1.125rem'
    },
    body: {
      fontSize: '13px',
      fontWeight: 'normal',
      color: palette.text.primary
    },
    footer: {
      fontSize: '13px',
      fontWeight: 'bold',
      color: palette.common.black
    }
  })
