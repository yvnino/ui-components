import React, { ReactNode, HTMLAttributes } from 'react';
import { TableHeadProps } from '@mui/material/TableHead';
export interface Props extends TableHeadProps, HTMLAttributes<HTMLTableSectionElement> {
    children: ReactNode;
}
export declare const TableHead: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<HTMLTableSectionElement>>;
export default TableHead;
