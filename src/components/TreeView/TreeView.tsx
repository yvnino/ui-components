import React, { forwardRef } from 'react'
import TreeViewMUI, { TreeViewProps } from '@mui/lab/TreeView'
import { makeStyles } from '@mui/styles'

import { CompoundedComponentWithRef } from '../../types'
import Item from './Item'
import Styled from './styles'

export interface StaticProps {
  Item: typeof Item
}

const useStyles = makeStyles(Styled)

const TreeView = forwardRef<HTMLElement, TreeViewProps>(function TreeView({
  children, ...rest
}, ref) {
  const classes = useStyles(rest)

  return (
    <TreeViewMUI
      className={classes.root}
      ref={ref as any}
      {...rest}
    >
      {children}
    </TreeViewMUI>
  )
}) as CompoundedComponentWithRef<TreeViewProps, HTMLElement, StaticProps>

TreeView.Item = Item

export default TreeView
