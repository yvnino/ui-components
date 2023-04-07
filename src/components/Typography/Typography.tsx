import React, { forwardRef } from 'react'
import MUITypography, { TypographyProps } from '@mui/material/Typography'

export interface Props extends TypographyProps {}

const Typography = forwardRef<
  HTMLElement,
  Props
>(function Typography(props, ref) {
  const { children, ...rest } = props

  return <MUITypography {...rest} ref={ref}>{children}</MUITypography>
})

export default Typography
