import React from 'react';
import { RadioGroupProps } from '@mui/material/RadioGroup';
export interface Props extends RadioGroupProps {
    horizontal?: boolean;
    errMsg?: string;
    value?: string;
    children: React.ReactNode;
}
declare const RadioGroup: ({ children, horizontal, value, errMsg, ...rest }: Props) => JSX.Element;
export default RadioGroup;
