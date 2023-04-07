/// <reference types="react" />
import { RadioProps } from '@mui/material/Radio';
export interface Props extends RadioProps {
    label: string;
    value: string;
}
declare const RadioButton: ({ label, value }: Props) => JSX.Element;
export default RadioButton;
