import React, { ReactNode } from 'react';
export interface Props {
    children?: ReactNode;
    direction?: 'row' | 'column';
    label?: string | ReactNode | undefined | null;
    icon?: ReactNode;
    style?: React.CSSProperties;
}
export declare const LabelWrapper: ({ children, direction, label, icon, style, }: Props) => JSX.Element;
export default LabelWrapper;
