import { createStyles } from '@mui/styles'

const headerHeight = { default: '4.5rem', smallAndMedium: '3rem' }

export default () =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      // height: '100%',
      width: '100%',

      '& > footer, & > header': {
        flex: 0
      },
      '& > header + *': {
        marginTop: headerHeight.default
      }
    }
  })
