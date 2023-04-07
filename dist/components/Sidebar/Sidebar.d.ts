import React from 'react';
import { CompoundedComponentWithRef } from '../../types';
import { DrawerProps } from '@mui/material/Drawer';
import SidebarItem from './SidebarItem';
import NestedSidebarItem from './NestedSidebarItem';
export interface StaticProps {
    Item: typeof SidebarItem;
    NestedItem: typeof NestedSidebarItem;
}
interface Props extends DrawerProps {
    mini?: boolean;
}
interface SidebarContextProps {
    mini?: boolean;
}
export declare const SidebarContext: React.Context<SidebarContextProps>;
export declare const useSidebarContext: () => SidebarContextProps;
declare const Sidebar: CompoundedComponentWithRef<Props, HTMLElement, StaticProps>;
export default Sidebar;
