import { createStyles } from '@mui/styles'

import palette from '../ThemeProvider/config/palette'
import { Props } from './'

export const StyledTab = createStyles({
  root: {
    padding: '3px 12px',
    fontSize: (props: Props) => (props.secondary || props.size === 'small') ? '0.8rem' : '1.2rem',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    justifyItems: 'center',
    height: (props: Props) => (props.secondary || props.size === 'small') ? '25px !important' : 'auto',
    minHeight: (props: Props) => (props.secondary || props.size === 'small') ? '25px !important' : 'auto'
  },
  fullWidth: {
    borderRadius: (props: Props) => props.secondary ? '5px' : 'auto',
    maxWidth: (props: Props) => (props.secondary || props.size === 'small') ? 'fit-content' : 'auto'
  },
  selected: {
    // backgroundColor: (props: Props) => props.secondary ? palette.primary.main : palette.background.default,
    // color: (props: Props) => props.secondary ? palette.common.white : palette.primary.dark
  }
})
