import React from 'react';
import { DialogActionsProps } from '@mui/material/DialogActions';
export interface Props extends DialogActionsProps {
    children?: React.ReactNode;
}
declare const ModalActions: React.FC<Props>;
export default ModalActions;
