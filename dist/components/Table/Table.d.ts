import React, { ReactNode, TableHTMLAttributes } from 'react';
import { TableProps } from '@mui/material/Table';
export type TableVariant = 'clear' | 'bordered' | 'striped' | 'transparent';
export interface Props extends TableProps, TableHTMLAttributes<HTMLTableElement> {
    children: ReactNode;
    variant?: TableVariant;
}
export declare const Table: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<HTMLTableElement>>;
declare const _default: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<HTMLTableElement>> & {
    Cell: React.ForwardRefExoticComponent<Omit<import("../TableCell").Props, "ref"> & React.RefAttributes<HTMLTableCellElement>>;
    Body: React.ForwardRefExoticComponent<Omit<import("../TableBody").Props, "ref"> & React.RefAttributes<HTMLTableSectionElement>>;
    Head: React.ForwardRefExoticComponent<Omit<import("../TableHead").Props, "ref"> & React.RefAttributes<HTMLTableSectionElement>>;
    Row: React.ForwardRefExoticComponent<Omit<import("../TableRow").Props, "ref"> & React.RefAttributes<HTMLTableRowElement>>;
    Footer: React.ForwardRefExoticComponent<Omit<import("../TableFooter").Props, "ref"> & React.RefAttributes<HTMLTableSectionElement>>;
};
export default _default;
