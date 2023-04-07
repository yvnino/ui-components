import React, { ReactNode } from 'react'
import { makeStyles } from '@mui/styles'
import MUITabs, { TabsProps } from '@mui/material/Tabs'

import * as S from './styles'

const useStyles = makeStyles(S.StyledTabs)

export interface Props extends TabsProps {
  children?: ReactNode
  onChange?: (val: any) => void
  secondary?: boolean
}

const Tabs = ({
  children,
  onChange,
  ...props
}: Props) => {
  const classes = useStyles(props)

  return (
    <MUITabs
      variant='fullWidth'
      onChange={(_e, val) => onChange && onChange(val)}
      classes={classes}
      TabIndicatorProps={props.secondary ? {
        style: { display: 'none' },
        ...(props.TabIndicatorProps || {})
      } : { ...(props.TabIndicatorProps || {}) }}
      {...props}
    >
      {children}
    </MUITabs>
  )
}

export default Tabs
