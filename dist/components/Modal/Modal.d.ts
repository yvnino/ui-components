import React from 'react';
import { DialogProps } from '@mui/material/Dialog';
import { CompoundedComponentWithRef } from '../../types';
import ModalTitle from './ModalTitle';
import ModalContent from './ModalContent';
import ModalActions from './ModalActions';
export interface Props extends DialogProps {
    children?: React.ReactNode;
    onClose?: () => void;
    open: boolean;
    fullScreen?: boolean;
}
export interface StaticProps {
    Content: typeof ModalContent;
    Actions: typeof ModalActions;
    Title: typeof ModalTitle;
}
declare const Modal: CompoundedComponentWithRef<Props, HTMLElement, StaticProps>;
export default Modal;
