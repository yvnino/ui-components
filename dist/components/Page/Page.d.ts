import React, { ReactNode, HTMLAttributes } from 'react';
import { BaseProps } from '../../types';
export type ViewportWidthType = 'wide' | 'full';
export interface PageContextProps {
    width?: ViewportWidthType;
}
export interface Props extends BaseProps, HTMLAttributes<HTMLDivElement> {
    /** Define container width `wide` | `full` */
    width?: ViewportWidthType;
    /** Horizontally centers the content */
    centered?: boolean;
    /** Children components (`Page.Header`, `Page.Content`, `Page.Footer`) */
    children: ReactNode;
}
export declare const PageContext: React.Context<PageContextProps>;
declare const _default: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLElement>> & {
    Header: (props: import("./PageHeader").Props) => JSX.Element;
    Content: (props: import("./PageContent").Props) => JSX.Element;
    Footer: (props: import("./PageFooter").Props) => JSX.Element;
};
export default _default;
