import React, {
  forwardRef,
  ReactNode,
  TableHTMLAttributes,
  useMemo
} from 'react'
import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'
import MUITable, { TableProps } from '@mui/material/Table'

import TableCell from '../TableCell'
import TableBody from '../TableBody'
import TableRow from '../TableRow'
import TableHead from '../TableHead'
import TableFooter from '../TableFooter'
import TableContext from './TableContext'
import styles from './styles'

export type TableVariant = 'clear' | 'bordered' | 'striped'| 'transparent'

export interface Props
  extends TableProps,
    TableHTMLAttributes<HTMLTableElement> {
  children: ReactNode
  variant?: TableVariant
}

const useStyles = makeStyles<Theme>(styles, {
  name: 'Table'
})

export const Table = forwardRef<HTMLTableElement, Props>(function Table(
  props,
  ref
) {
  const {
    className,
    style,
    children,
    variant = 'striped',
    ...rest
  } = props
  const classes = useStyles()

  const tableConfig = useMemo(() => ({ variant }), [variant])

  return (
    <TableContext.Provider value={tableConfig}>
      <MUITable
        {...rest}
        ref={ref}
        classes={classes}
        className={className}
        style={style}
      >
        {children}
      </MUITable>
    </TableContext.Provider>
  )
})

export default Object.assign(Table, {
  Cell: TableCell,
  Body: TableBody,
  Head: TableHead,
  Row: TableRow,
  Footer: TableFooter
})
