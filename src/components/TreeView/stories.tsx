import React, { useState } from 'react'
import { createStory } from '../../test'
import { ExpandMore, ChevronRight } from '@mui/icons-material/'
import Typography from '../Typography'
import TreeView from './TreeView'

interface RenderTree {
  id: string;
  name: string;
  children?: readonly RenderTree[];
}

const data: RenderTree = {
  id: 'root',
  name: 'Parent',
  children: [
    {
      id: '1',
      name: 'Child - 1',
    },
    {
      id: '3',
      name: 'Child - 3',
      children: [
        {
          id: '4',
          name: 'Child - 4',
        },
      ],
    },
  ],
};

const Example = () => {
  const renderTree = (nodes: RenderTree) => (
    <TreeView.Item key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeView.Item>
  );

  return (
    <TreeView
      aria-label="rich object"
      defaultCollapseIcon={<ExpandMore />}
      defaultExpanded={['root']}
      defaultExpandIcon={<ChevronRight />}
      sx={{ height: 110, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
    >
      {renderTree(data)}
    </TreeView>
  )
}

export default {
  title: '/TreeView',
  component: Example
}

export const Default = createStory(Example, {
})
