/// <reference types="react" />
import { FieldProps as FinalFieldProps, FieldRenderProps } from 'react-final-form';
import { Props as BaseInputProps } from '../../inputs/TextInput';
export type FieldProps<TInputValue> = FinalFieldProps<TInputValue, FieldRenderProps<TInputValue, HTMLInputElement>, HTMLInputElement>;
export type Props = BaseInputProps & {
    name: string;
    type?: string;
};
export declare const Input: (props: Props) => JSX.Element;
export default Input;
