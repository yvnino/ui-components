import React from 'react';
import { ButtonProps } from '@mui/material/Button';
export interface Props extends ButtonProps {
    iconButton?: React.ReactNode;
    loading?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export default Button;
