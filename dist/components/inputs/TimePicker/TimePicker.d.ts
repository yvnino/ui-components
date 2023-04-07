/// <reference types="react" />
export interface TimePickerProps {
    date?: Date;
    value?: string;
    onChange?: (val: string) => void;
}
declare const TimePicker: ({ value, onChange }: TimePickerProps) => JSX.Element;
export default TimePicker;
