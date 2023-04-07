import { createStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'

import palette from '../../ThemeProvider/config/palette'

export const ModalTitle = (theme: Theme) => createStyles({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  }
})

export const CloseButton = (theme: Theme) => createStyles({
  root: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: palette.grey[500],
    boxShadow: 'none'
  }
})
