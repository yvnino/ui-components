/// <reference types="react" />
import { ButtonProps } from '../../Button';
export type Props = Omit<ButtonProps, 'type'> & {
    id?: string;
};
export declare const SubmitButton: (props: Props) => JSX.Element;
export default SubmitButton;
