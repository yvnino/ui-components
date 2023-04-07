import React, { ReactNode } from 'react';
import { ListItemProps } from '@mui/material/ListItem';
export interface Props extends ListItemProps {
    text: React.ReactNode;
    key?: string | number;
    icon?: ReactNode;
    onClick?: () => void;
}
declare const SidebarItem: ({ text, key, icon, onClick, selected }: Props) => JSX.Element;
export default SidebarItem;
