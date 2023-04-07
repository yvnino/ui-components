import { TableFooterProps } from '@mui/material/TableFooter';
import React, { ReactNode, HTMLAttributes } from 'react';
export interface Props extends TableFooterProps, HTMLAttributes<HTMLTableSectionElement> {
    children: ReactNode;
}
export declare const TableFooter: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<HTMLTableSectionElement>>;
export default TableFooter;
