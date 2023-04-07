/// <reference types="react" />
import { Props as LabelProps } from '../LabelWrapper';
export interface Props {
    value?: Date;
    label: string;
    disablePast?: boolean;
    onChange?: (date: Date | null) => void;
    name?: string;
    labelProps?: LabelProps;
    error?: boolean;
    disableWeekends?: boolean;
    showTimeInput?: boolean;
}
declare const DatePicker: ({ value, label, showTimeInput, onChange, name, error, labelProps, disableWeekends }: Props) => JSX.Element;
export default DatePicker;
