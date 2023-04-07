import React, { forwardRef } from 'react'
import { makeStyles } from '@mui/styles'
import AccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary'

import Styled from './styles'

const useStyles = makeStyles(Styled)

export interface Props extends AccordionSummaryProps {
  color?: 'primary' | 'primary-dark' | 'secondary' | 'secondary-dark'
}

const Header = forwardRef<HTMLElement, Props>(function Accordion({
  children, ...rest
}, ref) {
  const classes = useStyles(rest)

  return (
    <AccordionSummary
      ref={ref as any}
      className={classes.root}
      {...rest}
    >
      {children}
    </AccordionSummary>
  )
})

export default Header
