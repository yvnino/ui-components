import { createStyles } from '@mui/styles'

export default () =>
  createStyles({
    root: {
      flex: 1,
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    content: {
      height: '100%',
      flexGrow: 1,
      maxWidth: '90rem',
      padding: '0 1rem'
    },
    wide: {
      maxWidth: '68rem'
    },
    fullWidth: {
      maxWidth: '100%'
    },
    flex: {
      display: 'flex'
    }
  })
