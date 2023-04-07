/// <reference types="react" />
import { FieldProps as FinalFieldProps, FieldRenderProps } from 'react-final-form';
import { Props as AutocompleteProps } from '../../inputs/Autocomplete';
export type FieldProps<TInputValue> = FinalFieldProps<TInputValue, FieldRenderProps<TInputValue, HTMLInputElement>, HTMLInputElement>;
export type Props = AutocompleteProps & FieldProps<AutocompleteProps['value']>;
export declare const Autocomplete: (props: Props) => JSX.Element;
export default Autocomplete;
