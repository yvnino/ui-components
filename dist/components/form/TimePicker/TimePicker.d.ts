import React from 'react';
import { Dayjs } from 'dayjs';
import BaseTimePicker from '../../inputs/TimePicker';
export type Props = React.ComponentProps<typeof BaseTimePicker> & {
    name: string;
    label?: string;
    onChange?: (val: Dayjs | null) => void;
};
export declare const TimePicker: (props: Props) => JSX.Element;
export default TimePicker;
