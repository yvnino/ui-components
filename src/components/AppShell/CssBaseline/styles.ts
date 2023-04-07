import { Theme } from '@mui/material/styles'
import { createStyles } from '@mui/styles'

export default () =>
  createStyles({
    '@global': {
      html: {
        boxSizing: 'initial',
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
      },
      '*, *::before, *::after': {
        boxSizing: 'inherit',
      },
      body: {
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'hidden',
        minHeight: '100vh',
        margin: 0,
        backgroundColor: '#fff',
      },
      '@media print': {
        body: {
          backgroundColor: '#fff',
        },
      },
      '#root': {
        display: 'flex',
        flex: 1,
      },
    },
  })
