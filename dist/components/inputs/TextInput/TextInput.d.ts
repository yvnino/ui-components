/// <reference types="react" />
import { TextFieldProps } from '@mui/material/TextField';
import { Props as LabelProps } from '../LabelWrapper';
export type Props = TextFieldProps & {
    labelProps?: LabelProps;
    onlyBottomBorder?: boolean;
};
declare const TextInput: ({ label, labelProps, onlyBottomBorder, variant, ...rest }: Props) => JSX.Element;
export default TextInput;
