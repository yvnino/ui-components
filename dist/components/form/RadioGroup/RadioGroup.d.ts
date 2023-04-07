/// <reference types="react" />
import { FieldProps as FinalFieldProps, FieldRenderProps } from 'react-final-form';
import { Props as BaseRadioGroupProps } from '../../inputs/RadioInput/RadioGroup';
import { Props as RadioButtonProps } from '../../inputs/RadioInput/RadioButton';
export type FieldProps<TInputValue> = FinalFieldProps<TInputValue, FieldRenderProps<TInputValue, HTMLInputElement>, HTMLInputElement>;
export type Props = BaseRadioGroupProps & FieldProps<RadioButtonProps['value']>;
export declare const RadioGroup: (props: Props) => JSX.Element;
export default RadioGroup;
