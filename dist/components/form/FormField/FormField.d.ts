import React from 'react';
export interface Props {
    hint?: string;
    error?: string;
    children: React.ReactNode;
    required?: boolean;
}
export declare const FormField: React.FC<Props>;
export default FormField;
