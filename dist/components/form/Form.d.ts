import { ReactNode } from 'react';
import { FormProps as FinalFormProps } from 'react-final-form';
type AnyObject = Record<string, any>;
export type Props<T = AnyObject> = FinalFormProps<T> & {
    successSubmitMessage?: ReactNode;
    failedSubmitMessage?: ReactNode;
    scrollOffsetTop?: number;
};
export declare const Form: <T extends AnyObject = AnyObject>(props: Props<T>) => JSX.Element;
export default Form;
