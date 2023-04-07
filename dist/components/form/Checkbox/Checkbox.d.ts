/// <reference types="react" />
import { CheckboxProps } from '@mui/material/Checkbox';
export type Props = CheckboxProps & {
    name: string;
    onChangeData?: any;
    label?: string;
};
export declare const Checkbox: (props: Props) => JSX.Element;
export default Checkbox;
