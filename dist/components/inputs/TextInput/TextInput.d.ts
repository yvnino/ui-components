import React from 'react';
import { TextFieldProps } from '@mui/material/TextField';
import { Props as LabelProps } from '../LabelWrapper';
export type Props = TextFieldProps & {
    labelProps?: LabelProps;
    onlyBottomBorder?: boolean;
};
declare const TextInput: React.ForwardRefExoticComponent<(Omit<import("@mui/material/TextField").StandardTextFieldProps & {
    labelProps?: LabelProps | undefined;
    onlyBottomBorder?: boolean | undefined;
}, "ref"> | Omit<import("@mui/material/TextField").FilledTextFieldProps & {
    labelProps?: LabelProps | undefined;
    onlyBottomBorder?: boolean | undefined;
}, "ref"> | Omit<import("@mui/material/TextField").OutlinedTextFieldProps & {
    labelProps?: LabelProps | undefined;
    onlyBottomBorder?: boolean | undefined;
}, "ref">) & React.RefAttributes<HTMLInputElement>>;
export default TextInput;
