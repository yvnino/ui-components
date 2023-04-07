import React from 'react';
import { TypographyProps } from '@mui/material/Typography';
export interface Props extends TypographyProps {
}
declare const Typography: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<HTMLElement>>;
export default Typography;
