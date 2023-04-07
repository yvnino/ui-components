import { ReactNode } from 'react';
import { TypographyProps } from '../Typography';
export interface Props extends TypographyProps {
    /** A typography which can possibly overflow */
    children?: ReactNode;
    /** Number of lines displayed */
    lines?: number;
    /** A content to show in tooltip when typography overflows. By default, TypographyOverflow's children are used. */
    tooltipContent?: ReactNode;
    tooltipDelay?: number;
    /** Do not show tooltips for shorten content. */
    disableTooltip?: boolean;
    checked?: boolean;
}
export declare const TypographyOverflow: (props: Props) => JSX.Element;
export default TypographyOverflow;
