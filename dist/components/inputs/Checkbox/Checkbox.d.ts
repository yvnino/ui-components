import React from 'react';
import { CheckboxProps } from '@mui/material/Checkbox';
type ProtoExntends<T, U> = U & Omit<T, keyof U>;
export type Props = ProtoExntends<CheckboxProps, {
    labelNode?: React.ReactNode;
    native?: boolean;
    label?: string;
}>;
declare const Checkbox: ({ label, labelNode, native, ref, ...rest }: Props) => JSX.Element;
export default Checkbox;
