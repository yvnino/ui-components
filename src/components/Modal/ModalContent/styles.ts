import { createStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'

export const ModalContent = (theme: Theme) => createStyles({
  root: {
    padding: theme.spacing(3),
    position: 'relative'
  }
})
