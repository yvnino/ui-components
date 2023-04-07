import React from 'react';
import { DialogTitleProps } from '@mui/material/DialogTitle';
export interface Props extends DialogTitleProps {
    children?: React.ReactNode;
    onClose?: () => void;
}
declare const ModalTitle: React.FC<Props>;
export default ModalTitle;
