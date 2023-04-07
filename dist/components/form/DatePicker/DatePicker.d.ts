/// <reference types="react" />
import { FieldProps as FinalFieldProps, FieldRenderProps } from 'react-final-form';
import { Props as BaseDatePickerProps } from '../../inputs/DatePicker';
export type FieldProps<TInputValue> = FinalFieldProps<TInputValue, FieldRenderProps<TInputValue, HTMLInputElement>, HTMLInputElement>;
export type Props = BaseDatePickerProps & FieldProps<BaseDatePickerProps['value']>;
export declare const DatePicker: (props: Props) => JSX.Element;
export default DatePicker;
