import React from 'react';
import { AccordionSummaryProps } from '@mui/material/AccordionSummary';
export interface Props extends AccordionSummaryProps {
    color?: 'primary' | 'primary-dark' | 'secondary' | 'secondary-dark';
}
declare const Header: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<HTMLElement>>;
export default Header;
