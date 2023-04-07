import React, { forwardRef, ReactNode, HTMLAttributes } from 'react'
import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'
import MUITableBody, { TableBodyProps } from '@mui/material/TableBody'
import cx from 'classnames'

import styles from './styles'
import TableContext from '../Table/TableContext'
import { TableSectionContext, TableSection } from '../Table/TableSectionContext'

export interface Props
  extends TableBodyProps,
    HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode
}

const stripeRows = (children: React.ReactNode) => {
  let stripeIndex = -1

  return React.Children.map(children, child => {
    if (!React.isValidElement(child)) {
      return child
    }

    stripeIndex++
    if (stripeIndex % 2 !== 0) {
      return React.cloneElement(child, { stripeEven: true } as any)
    }

    return child
  })
}

const useStyles = makeStyles<Theme>(styles, { name: 'TableBody' })

export const TableBody = forwardRef<HTMLTableSectionElement, Props>(
  function TableBody(props, ref) {
    const { className, style, children, ...rest } = props
    const classes = useStyles()
    const { variant } = React.useContext(TableContext)
    const isTransparent = variant === 'transparent'

    return (
      <TableSectionContext.Provider value={TableSection.BODY}>
        <MUITableBody
          {...rest}
          ref={ref}
          classes={classes}
          className={cx(className, {
            [classes.transparent]: isTransparent
          })}
          style={style}
        >
          {variant === 'striped' ? stripeRows(children) : children}
        </MUITableBody>
      </TableSectionContext.Provider>
    )
  }
)

export default TableBody
