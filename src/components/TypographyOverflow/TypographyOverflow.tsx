import cx from 'classnames'
import React, { ReactNode } from 'react'
import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'

import styles from './styles'
import Typography, { TypographyProps } from '../Typography'

export interface Props extends TypographyProps {
  /** A typography which can possibly overflow */
  children?: ReactNode
  /** Number of lines displayed */
  lines?: number
  /** A content to show in tooltip when typography overflows. By default, TypographyOverflow's children are used. */
  tooltipContent?: ReactNode
  tooltipDelay?: number
  /** Do not show tooltips for shorten content. */
  disableTooltip?: boolean
  checked?: boolean
}

const useStyles = makeStyles<Theme, Props>(styles, {
  name: 'TypographyOverflow'
})

export const TypographyOverflow = (props: Props) => {
  const {
    children,
    lines = 1,
    tooltipContent,
    tooltipDelay,
    disableTooltip,
    className,
    onClick,
    onMouseEnter,
    style,
    checked,
    ...rest
  } = props

  const classes = useStyles(props)
  const isMultiline = lines > 1

  const extendedStyle = isMultiline
    ? { ...style, WebkitLineClamp: lines }
    : style


  return (
    <Typography
      {...rest}
      style={extendedStyle}
      title={typeof children === 'string' ? children : undefined}
      className={cx(
        classes.wrapper,
        isMultiline ? classes.multiLine : classes.singleLine,
        className
      )}
    >
      {children}
    </Typography>
  )
}

export default TypographyOverflow
