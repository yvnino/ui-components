import React, { forwardRef } from 'react'
import AccordionMUI, { AccordionProps } from '@mui/material/Accordion'
import { makeStyles } from '@mui/styles'

import { CompoundedComponentWithRef } from '../../types'
import Header from './Header'
import Content from './Content'
import Styled from './styles'

export interface StaticProps {
  Header: typeof Header
  Content: typeof Content
}

export interface Props extends AccordionProps {}

const useStyles = makeStyles(Styled)

const Accordion = forwardRef<HTMLElement, AccordionProps>(function Accordion({
  children, ...rest
}, ref) {
  const classes = useStyles(rest)

  return (
    <AccordionMUI
      className={classes.root}
      ref={ref as any}
      {...rest}
    >
      {children}
    </AccordionMUI>
  )
}) as CompoundedComponentWithRef<Props, HTMLElement, StaticProps>

Accordion.Header = Header
Accordion.Content = Content

export default Accordion
