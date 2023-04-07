import { createStyles } from '@mui/styles'

export default () =>
  createStyles({
    root: {
      padding: 0,
      margin: 0,
      boxShadow: 'none !important',
      '&.Mui-disabled': {
        backgroundColor: 'transparent'
      }
    }
  })
