import React from 'react'
import { withStyles } from '@mui/styles'
import DialogTitle, { DialogTitleProps } from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import { Close } from '../../Icons'

import Typography from '../../Typography'
import * as S from './styles'

const StyledModalTitle = withStyles(S.ModalTitle)(DialogTitle)
const StyledIconButton = withStyles(S.CloseButton)(IconButton)

export interface Props extends DialogTitleProps {
  children?: React.ReactNode
  onClose?: () => void
}

const ModalTitle: React.FC<Props> = ({ children, onClose, ...rest }) => {
  return (
    <StyledModalTitle id='modal-title' {...rest}>
      <Typography fontSize='large' variant='h6'>{children}</Typography>
      {onClose ? (
        <StyledIconButton aria-label='close' onClick={onClose}>
          <Close />
        </StyledIconButton>
      ) : null}
    </StyledModalTitle>
  )
}

export default ModalTitle
