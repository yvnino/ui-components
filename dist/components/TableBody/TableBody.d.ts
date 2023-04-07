import React, { ReactNode, HTMLAttributes } from 'react';
import { TableBodyProps } from '@mui/material/TableBody';
export interface Props extends TableBodyProps, HTMLAttributes<HTMLTableSectionElement> {
    children: ReactNode;
}
export declare const TableBody: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<HTMLTableSectionElement>>;
export default TableBody;
