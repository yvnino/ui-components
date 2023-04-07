import React, { forwardRef, HTMLAttributes } from 'react'
import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'
import MUITableCell, { TableCellProps } from '@mui/material/TableCell'

import styles from './styles'
import { TableSectionContext, TableSection } from '../Table/TableSectionContext'

type AlignType = 'inherit' | 'left' | 'center' | 'right' | 'justify'

export interface Props
  extends TableCellProps,
    HTMLAttributes<HTMLTableCellElement> {
  align?: AlignType
  colSpan?: number
  rowSpan?: number
}

const useStyles = makeStyles<Theme>(styles, { name: 'TableCell' })

export const TableCell = forwardRef<HTMLTableCellElement, Props>(
  function TableCell(props, ref) {
    const {
      align = 'inherit',
      className,
      style,
      children,
      colSpan,
      rowSpan,
      ...rest
    } = props

    const {
      footer: footerClass,
      header: headerClass,
      ...muiClasses
    } = useStyles()
    const tableSection = React.useContext(TableSectionContext)
    const isHead = tableSection === TableSection.HEAD

    return (
      <MUITableCell
        {...rest}
        ref={ref}
        align={align}
        classes={muiClasses}
        style={{
          ...(style || {}),
          ...(isHead ? { fontWeight: 'bold' } : {})
        }}
        colSpan={colSpan}
        rowSpan={rowSpan}
      >
        {children}
      </MUITableCell>
    )
  }
)

export default TableCell
