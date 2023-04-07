import React, { ReactNode } from 'react'
import { makeStyles } from '@mui/styles'
import MUITab, { TabProps } from '@mui/material/Tab'

import * as S from './styles'

const useStyles = makeStyles(S.StyledTab)

export interface Props extends TabProps {
  secondary?: boolean
  size?: 'medium' | 'small'
}

const Tab = ({
  children,
  ...props
}: Props) => {
  const classes = useStyles(props)

  return (
    <MUITab
    {...props}
      classes={classes}
    />
  )
}

export default Tab
