/// <reference types="react" />
import { FieldProps as FinalFieldProps, FieldRenderProps } from 'react-final-form';
import { Props as RadioButtonProps } from '../../inputs/RadioInput/RadioButton';
export type FieldProps<TInputValue> = FinalFieldProps<TInputValue, FieldRenderProps<TInputValue, HTMLInputElement>, HTMLInputElement>;
export type Props = RadioButtonProps & {
    name?: string;
};
export declare const RadioButton: (props: Props) => JSX.Element;
export default RadioButton;
