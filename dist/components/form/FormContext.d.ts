import { MutableRefObject } from 'react';
import { FieldValidator } from 'final-form';
export type Validators = Record<string, FieldValidator<unknown>>;
export type FormContextProps = {
    getValidators: () => Validators;
    setValidators: (fieldName: string, validator: FieldValidator<unknown>) => void;
    clearValidators: (fieldName: string) => void;
};
export declare const createFormContext: () => FormContextProps;
export declare const FormContext: import("react").Context<MutableRefObject<FormContextProps> | null>;
export declare const useFormContext: () => FormContextProps;
