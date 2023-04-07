import { createStyles } from '@mui/styles'

import { Props } from './'

const SIZES = {
  xsmall: 16,
  small: 20,
  medium: 26,
  large: 30
}

export default () =>
  createStyles({
    root: {
      height: (props: Props) => SIZES[props.size || 'medium'],
      width: (props: Props) => SIZES[props.size || 'medium'],
    },
    icon: {
      fontSize: (props: Props) => SIZES[props.size || 'medium']
    },
    labelWrp: {
      margin: 0
    },
    label: {
      fontSize: (props: Props) => SIZES[props.size || 'medium']
    },
    native: {
      margin: '0 !important',
      '&::active::before': {
        backgroundColor: 'black',
      }
    }
  })
