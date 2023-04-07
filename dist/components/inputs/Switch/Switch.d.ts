import React from 'react';
import { SwitchProps } from '@mui/material/Switch';
export interface Props extends SwitchProps {
    label?: React.ReactNode;
}
export declare const Switch: ({ label, ...props }: Props) => JSX.Element;
export default Switch;
