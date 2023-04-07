import React, { forwardRef, ReactNode, HTMLAttributes } from 'react'
import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'
import MUITableHead, { TableHeadProps } from '@mui/material/TableHead'

import styles from './styles'
import { TableSectionContext, TableSection } from '../Table/TableSectionContext'

export interface Props
  extends TableHeadProps,
    HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode
}

const useStyles = makeStyles<Theme>(styles, { name: 'TableHead' })

export const TableHead = forwardRef<HTMLTableSectionElement, Props>(
  function TableHead(props, ref) {
    const { className, style, children, ...rest } = props
    const classes = useStyles()

    return (
      <TableSectionContext.Provider value={TableSection.HEAD}>
        <MUITableHead
          {...rest}
          ref={ref}
          classes={classes}
          className={className}
          style={style}
        >
          {children}
        </MUITableHead>
      </TableSectionContext.Provider>
    )
  }
)

export default TableHead
