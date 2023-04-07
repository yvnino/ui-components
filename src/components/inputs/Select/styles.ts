import { createStyles } from '@mui/styles'

import palette, { colors } from '../../ThemeProvider/config/palette'

export const Select = createStyles({
  root: {
    fontSize: '1rem',
    minHeight: 'unset',
    whiteSpace: 'normal',
    textAlign: 'center',
    height: '2.4375rem',
    padding: 0,
    borderRadius: 4
  }
})

export const Input = createStyles({
  input: {
    borderRadius: 4,
    position: 'relative',
    border: `1px solid ${colors.grey.main}`,
    fontSize: 16,
    padding: 0,
    paddingLeft: '0.5rem',
    '&:focus': {
      borderRadius: 4,
      borderColor: colors.grey.dark
    },
  }
})
