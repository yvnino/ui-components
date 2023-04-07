import React, { forwardRef } from 'react'
import { makeStyles } from '@mui/styles'
import TreeItem, { TreeItemProps } from '@mui/lab/TreeItem'

import Styled from './styles'

const useStyles = makeStyles(Styled)

const Item = forwardRef<HTMLElement, TreeItemProps>(function Accordion({
  children, ...rest
}, ref) {
  const classes = useStyles(rest)

  return (
    <TreeItem
      ref={ref as any}
      className={classes.root}
      {...rest}
    >
      {children}
    </TreeItem>
  )
})

export default Item
