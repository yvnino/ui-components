import React from 'react'
import { makeStyles } from '@mui/styles'
import AccordionDetails, { AccordionDetailsProps } from '@mui/material/AccordionDetails'

import Styled from './styles'

const useStyles = makeStyles(Styled)

export interface Props extends AccordionDetailsProps {
  color?: 'primary' | 'primary-dark' | 'secondary' | 'secondary-dark'
}

const Content = ({ children, ...rest }: Props) => {
  const classes = useStyles(rest)

  return (
    <AccordionDetails
      className={classes.root}
      {...rest}
    >
      {children}
    </AccordionDetails>
  )
}

export default Content
