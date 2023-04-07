/// <reference types="react" />
import { FieldProps as FinalFieldProps, FieldRenderProps } from 'react-final-form';
import { Props as BaseSelectProps } from '../../inputs/Select';
export type FieldProps<TInputValue> = FinalFieldProps<TInputValue, FieldRenderProps<TInputValue, HTMLInputElement>, HTMLInputElement>;
export type Props = BaseSelectProps & FieldProps<BaseSelectProps['value']>;
export declare const Select: (props: Props) => JSX.Element;
export default Select;
