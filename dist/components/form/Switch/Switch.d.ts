/// <reference types="react" />
import { SwitchProps } from '@mui/material/Switch';
export type Props = SwitchProps & {
    name: string;
    onChangeData?: any;
    label?: string;
};
export declare const Switch: (props: Props) => JSX.Element;
export default Switch;
