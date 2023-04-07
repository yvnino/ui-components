import React, { forwardRef } from 'react'
import Dialog, { DialogProps } from '@mui/material/Dialog'
import { CompoundedComponentWithRef } from '../../types'

import ModalTitle from './ModalTitle'
import ModalContent from './ModalContent'
import ModalActions from './ModalActions'

export interface Props extends DialogProps {
  children?: React.ReactNode
  onClose?: () => void
  open: boolean
  fullScreen?: boolean
}

export interface StaticProps {
  Content: typeof ModalContent
  Actions: typeof ModalActions
  Title: typeof ModalTitle
}

const Modal = forwardRef(function Modal({
  children, onClose, open, fullScreen, ...rest
}: Props, ref) {

  return (
    <Dialog
      ref={ref as any}
      style={{
        zIndex: 4000
      }}
      BackdropProps={{
        style: {
          opacity: 0.45
        } }}
      container={rest.container}
      onClose={onClose}
      aria-labelledby='modal-title'
      open={open}
      {...rest}
    >
      {children}
    </Dialog>
  )
}) as CompoundedComponentWithRef<Props, HTMLElement, StaticProps>

Modal.Title = ModalTitle
Modal.Content = ModalContent
Modal.Actions = ModalActions

export default Modal
