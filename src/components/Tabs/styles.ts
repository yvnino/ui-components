import { createStyles } from '@mui/styles'

import { Props } from './'

export const StyledTabs = createStyles({
  root: {
    alignItems: 'center'
  },
  indicator: {},
  flexContainer: {
    justifyContent: (props: Props) => props.secondary ? 'space-around' : 'space-between'
  }
})
