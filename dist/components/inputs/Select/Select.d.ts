import React from 'react';
import { SelectProps } from '@mui/material/Select';
import { InputBaseProps } from '@mui/material/InputBase';
import { Props as LabelProps } from '../LabelWrapper';
type Option<T extends string | number = string | number> = {
    key?: number;
    text: string;
    value: T;
};
export type Props = SelectProps & {
    options: Option[];
    placeholder?: string;
    errMsg?: string;
    labelProps?: LabelProps;
    label?: React.ReactNode;
    textInputProps?: InputBaseProps;
};
declare const Select: ({ options, placeholder, errMsg, labelProps, textInputProps, ...rest }: Props) => JSX.Element;
export default Select;
