import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'
import MUITableFooter, { TableFooterProps } from '@mui/material/TableFooter'
import React, { forwardRef, ReactNode, HTMLAttributes } from 'react'

import styles from './styles'
import { TableSectionContext, TableSection } from '../Table/TableSectionContext'

export interface Props
  extends TableFooterProps,
    HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode
}

const useStyles = makeStyles<Theme>(styles, {
  name: 'TableFooter'
})

export const TableFooter = forwardRef<HTMLTableSectionElement, Props>(
  function TableFooter(props, ref) {
    const { className, style, children, ...rest } = props
    const classes = useStyles()

    return (
      <TableSectionContext.Provider value={TableSection.FOOTER}>
        <MUITableFooter
          {...rest}
          ref={ref}
          classes={classes}
          className={className}
          style={style}
        >
          {children}
        </MUITableFooter>
      </TableSectionContext.Provider>
    )
  }
)

export default TableFooter
