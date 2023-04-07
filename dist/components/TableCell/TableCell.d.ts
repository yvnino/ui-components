import React, { HTMLAttributes } from 'react';
import { TableCellProps } from '@mui/material/TableCell';
type AlignType = 'inherit' | 'left' | 'center' | 'right' | 'justify';
export interface Props extends TableCellProps, HTMLAttributes<HTMLTableCellElement> {
    align?: AlignType;
    colSpan?: number;
    rowSpan?: number;
}
export declare const TableCell: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<HTMLTableCellElement>>;
export default TableCell;
