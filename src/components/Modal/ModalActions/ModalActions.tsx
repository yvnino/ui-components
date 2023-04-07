import React from 'react'
import { withStyles } from '@mui/styles'
import DialogActions, { DialogActionsProps } from '@mui/material/DialogActions'

import * as S from './styles'

const StyledModalActions = withStyles(S.ModalActions)(DialogActions)

export interface Props extends DialogActionsProps {
  children?: React.ReactNode
}

const ModalActions: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <StyledModalActions {...rest}>
      {children}
    </StyledModalActions>
  )
}

export default ModalActions
