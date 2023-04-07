import React, { FormEventHandler, ReactNode, FormHTMLAttributes } from 'react';
import { BaseProps } from '../../../types';
export interface Props extends BaseProps, FormHTMLAttributes<HTMLFormElement> {
    children?: ReactNode;
    onSubmit?: FormEventHandler<HTMLFormElement>;
}
export declare const BaseForm: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLFormElement>>;
export default BaseForm;
