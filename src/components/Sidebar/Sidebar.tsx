import React, { ReactNode, forwardRef, useMemo } from 'react'
import { CompoundedComponentWithRef } from '../../types'
import Drawer, { DrawerProps } from '@mui/material/Drawer'
import List from '@mui/material/List'
import { makeStyles } from '@mui/styles'

import SidebarItem from './SidebarItem'
import NestedSidebarItem from './NestedSidebarItem'

export interface StaticProps {
  Item: typeof SidebarItem
  NestedItem: typeof NestedSidebarItem
}

interface Props extends DrawerProps {
  mini?: boolean
}

const SIDE_BAR_WIDTH = 240
const MINI_SIDE_BAR_WIDTH = 140

interface SidebarContextProps {
  mini?: boolean
}

export const SidebarContext = React.createContext<SidebarContextProps>({
  mini: false
})

export const useSidebarContext = () => React.useContext<SidebarContextProps>(SidebarContext)

const Sidebar = forwardRef<HTMLElement, Props>(function Sidebar({
  children,
  mini,
  ...rest
}, ref) {
  const SidebarWidth = useMemo(() => (
    mini ? MINI_SIDE_BAR_WIDTH : SIDE_BAR_WIDTH
  ), [mini])

  return (
    <Drawer
      ref={ref as any}
      sx={{
        width: SidebarWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: SidebarWidth,
          boxSizing: 'border-box',
        },
      }}
      {...rest}
    >
      <SidebarContext.Provider value={{ mini }}>
        <List>
          {children}
        </List>
      </SidebarContext.Provider>
    </Drawer>
  )
}) as CompoundedComponentWithRef<Props, HTMLElement, StaticProps>

Sidebar.Item = SidebarItem
Sidebar.NestedItem = NestedSidebarItem

export default Sidebar
