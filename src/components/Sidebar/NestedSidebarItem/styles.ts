import { createStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'

export const StyledNestedItem = (theme: Theme) => createStyles({
  nested: {
    paddingLeft: theme.spacing(4)
  }
})
