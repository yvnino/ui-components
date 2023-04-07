import React, {
  forwardRef,
  ReactNode,
  MouseEvent,
  HTMLAttributes,
  useContext
} from 'react'
import cx from 'classnames'
import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'
import MUITableRow, { TableRowProps } from '@mui/material/TableRow'

import styles from './styles'
import TableContext from '../Table/TableContext'

export interface Props extends TableRowProps, HTMLAttributes<HTMLTableRowElement> {
  children: ReactNode
  hover?: boolean
  selected?: boolean
  onClick?: (event: MouseEvent<HTMLTableRowElement>) => void
  stripeEven?: boolean
  bordered?: boolean
}

const useStyles = makeStyles<Theme>(styles, { name: 'TableRow' })

export const TableRow = forwardRef<HTMLTableRowElement, Props>(
  function TableRow(props, ref) {
    const {
      className,
      style,
      children,
      hover,
      selected,
      stripeEven,
      onClick,
      bordered,
      ...rest
    } = props
    const {
      stripeEven: stripeEvenClass,
      bordered: borderedClass,
      transparent: transparentClass,
      ...muiClasses
    } = useStyles()
    const { variant } = useContext(TableContext)
    const isBordered = bordered || variant === 'bordered'
    const isTransparent = variant === 'transparent'

    return (
      <MUITableRow
        {...rest}
        ref={ref}
        classes={muiClasses}
        className={cx(className, {
          [stripeEvenClass]: stripeEven,
          [borderedClass]: isBordered,
          [transparentClass]: isTransparent
        })}
        style={style}
        hover={hover}
        selected={selected}
        onClick={onClick}
      >
        {children}
      </MUITableRow>
    )
  }
)

export default TableRow
