import { createStyles } from '@mui/styles'
import palette from '../../ThemeProvider/config/palette'

import { Props } from './'

const getColor = (color: Props['color']) => {
  if (color === 'primary-dark') {
    return palette.primary.dark
  }

  if (color === 'secondary') {
    return palette.secondary.main
  }

  if (color === 'secondary-dark') {
    return palette.secondary.dark
  }

  return 'transparent'
}

export default () =>
  createStyles({
    root: {
      boxShadow: (props: Props) => `0px 1px 1px ${getColor(props.color)}`
    }
  })
