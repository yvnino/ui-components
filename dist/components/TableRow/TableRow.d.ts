import React, { ReactNode, MouseEvent, HTMLAttributes } from 'react';
import { TableRowProps } from '@mui/material/TableRow';
export interface Props extends TableRowProps, HTMLAttributes<HTMLTableRowElement> {
    children: ReactNode;
    hover?: boolean;
    selected?: boolean;
    onClick?: (event: MouseEvent<HTMLTableRowElement>) => void;
    stripeEven?: boolean;
    bordered?: boolean;
}
export declare const TableRow: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<HTMLTableRowElement>>;
export default TableRow;
