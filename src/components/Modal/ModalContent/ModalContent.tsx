import React from 'react'

import { withStyles } from '@mui/styles'
import DialogContent, { DialogContentProps } from '@mui/material/DialogContent'

import * as S from './styles'

const StyledModalContent = withStyles(S.ModalContent)(DialogContent)

export interface Props extends DialogContentProps {
  children?: React.ReactNode
}

const ModalContent = ({ children, ...other }: Props) => {
  return (
    <StyledModalContent {...other}>
      {children}
    </StyledModalContent>
  )
}

export default ModalContent
