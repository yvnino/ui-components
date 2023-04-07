import { ReactNode, HTMLAttributes } from 'react';
export interface Props extends HTMLAttributes<HTMLDivElement> {
    /** Custom components that render content of page */
    children: ReactNode;
    /** Use flexbox */
    flex?: boolean;
}
declare const PageContent: (props: Props) => JSX.Element;
export default PageContent;
