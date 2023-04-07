import { createStyles } from '@mui/styles'

import palette, { colors } from '../../ThemeProvider/config/palette'

export const StyledInput = createStyles({
  root: {
    width: '100%',
    // '& .MuiOutlinedInput-root': {
    //   '&.Mui-focused fieldset': {
    //     borderColor: palette.primary.main,
    //   }
    // },
    '& .MuiInputBase-input:focus': {
      boxShadow: 'none',
      // backgroundColor: 'inherit',
      border: 'inherit'
    },
    '& .MuiInputBase-input.Mui-disabled': {
      // backgroundColor: 'transparent !important',
      cursor: 'not-allowed !important'
    }
  },
  label: {
    // color: colors.grey.lighter,
    fontSize: '14px',
    '-webkit-font-smoothing': 'antialiased',
    textTransform: 'capitalize',
    // '&.Mui-focused': {
    //   color: palette.primary.main
    // },
    // '&.Mui-error': {
    //   color: palette.primary.main
    // }
  },
  input: {
    '& input': {
      height: '2.4375rem',
      lineHeight: '25px',
      padding: '0',
      paddingLeft: '0.5rem',
      boxShadow: 'none',
      fontSize: '1rem',
      '&::placeholder': {
        // color: 'rgb(59, 59, 59) !important',
        fontSize: '15px',
      },
      '&.Mui-disabled': {
        cursor: 'not-allowed !important'
      },
      '&:focus': {
        boxShadow: 'none',
        border: 'inherit'
      }
    },
    '&.Mui-disabled': {
      cursor: 'not-allowed !important'
    },
    '& .Mui-disabled': {
      cursor: 'not-allowed !important'
    },
    // '& .MuiOutlinedInput-root': {
    //   '&.Mui-focused fieldset': {
    //     borderColor: colors.grey.main,
    //   }
    // },
    '&.Mui-error': {
      '&.MuiInput-underline:after': {
        border: `2px solid ${colors.red.main} !important`
      }
    }
  },
  inputOnlyBottomBorder: {
    width: '100%',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: colors.grey.main,
        border: 'none',
        borderBottom: '1px solid ',
        borderRadius: 0
      },
      '&.Mui-focused fieldset': {
        borderColor: colors.grey.main,
        border: 'none',
        borderBottom: '1px solid',
        borderRadius: 0
      }
    }
  },
  helper: {
    textAlign: 'right',
    fontSize: '13px',
    letterSpacing: '0',
    '-webkit-font-smoothing': 'antialiased',
    marginTop: '0'
  }
})
