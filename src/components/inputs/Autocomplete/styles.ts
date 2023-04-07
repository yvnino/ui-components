import { createStyles } from '@mui/styles'

export const Styled = createStyles({
  root: {
    zIndex: 9999
  },
  closeIcon: {
    '& .MuiAutocomplete-clearIndicator': {
      boxShadow: 'none'
    },
    '& .MuiInputBase-root': {
      paddingTop: '0 !important',
      paddingBottom: '0 !important' 
    }
  }
})
