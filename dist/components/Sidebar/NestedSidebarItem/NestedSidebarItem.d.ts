import React, { ReactNode } from 'react';
export interface Props {
    text: string;
    key?: string | number;
    icon?: ReactNode;
    isOpen?: boolean;
    children: React.ReactNode;
}
declare const NestedSidebarItem: (props: Props) => JSX.Element;
export default NestedSidebarItem;
