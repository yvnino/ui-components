import type { ReactNode } from 'react';
import React from 'react';
export interface Props extends React.HTMLAttributes<HTMLSpanElement> {
    /** Content of the component */
    children: ReactNode;
    /** Number of lines displayed initially */
    rows?: number;
    /** Text used by action link showing whole content */
    moreText?: string;
    /** Text used by action link hiding whole content */
    lessText?: string;
    /** Define component initial state, whether it should be collapsed or not */
    initialExpanded?: boolean;
    /** Define whether action link should be displayed or not */
    disableToggle?: boolean;
    /** Callback triggered when show more/less is clicked */
    onToggle?: (nextState: boolean) => void;
    testIds?: {
        contentWrapper?: string;
        toggleButton?: string;
    };
}
export declare const ShowMore: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLSpanElement>>;
export default ShowMore;
