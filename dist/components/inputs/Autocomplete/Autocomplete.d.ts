import React from 'react';
import { Props as TextInputProps } from '../TextInput';
interface Option {
    name: string;
    value: string | number;
}
export interface Props {
    onSelect?: (data: any) => void;
    citiesOnly?: boolean;
    label?: React.ReactNode;
    value?: string | null;
    name?: string | undefined;
    textInputProps?: TextInputProps;
    filterType?: string;
    includesIn?: string;
    isDisabled?: boolean;
    error?: boolean;
    searchTypes?: string[];
    options: Option[];
    loading?: boolean;
    onInputChange?: (ev: any, data: any) => void;
}
declare const Autocomplete: React.ForwardRefExoticComponent<Props & React.RefAttributes<unknown>>;
export default Autocomplete;
