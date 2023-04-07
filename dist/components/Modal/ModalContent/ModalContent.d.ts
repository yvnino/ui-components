import React from 'react';
import { DialogContentProps } from '@mui/material/DialogContent';
export interface Props extends DialogContentProps {
    children?: React.ReactNode;
}
declare const ModalContent: ({ children, ...other }: Props) => JSX.Element;
export default ModalContent;
