import React from 'react';
import { GridProps } from '@mui/material/Grid';
export interface Props {
    children?: React.ReactNode;
    label?: React.ReactNode;
    direction?: GridProps['direction'];
}
declare const LabelWrapper: ({ children, direction, label }: Props) => JSX.Element;
export default LabelWrapper;
