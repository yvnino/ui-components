import React from 'react';
import { FieldProps as FinalFieldProps, FieldRenderProps } from 'react-final-form';
import { Props as BaseInputProps } from '../../inputs/TextInput';
export type FieldProps<TInputValue> = FinalFieldProps<TInputValue, FieldRenderProps<TInputValue, HTMLInputElement>, HTMLInputElement>;
export type Props = BaseInputProps & {
    name: string;
    type?: string;
};
export declare const Input: React.ForwardRefExoticComponent<(Omit<import("@mui/material").FilledTextFieldProps & {
    labelProps?: import("../../inputs/LabelWrapper").Props | undefined;
    onlyBottomBorder?: boolean | undefined;
} & {
    name: string;
    type?: string | undefined;
}, "ref"> | Omit<import("@mui/material").OutlinedTextFieldProps & {
    labelProps?: import("../../inputs/LabelWrapper").Props | undefined;
    onlyBottomBorder?: boolean | undefined;
} & {
    name: string;
    type?: string | undefined;
}, "ref"> | Omit<import("@mui/material").StandardTextFieldProps & {
    labelProps?: import("../../inputs/LabelWrapper").Props | undefined;
    onlyBottomBorder?: boolean | undefined;
} & {
    name: string;
    type?: string | undefined;
}, "ref">) & React.RefAttributes<HTMLInputElement>>;
export default Input;
