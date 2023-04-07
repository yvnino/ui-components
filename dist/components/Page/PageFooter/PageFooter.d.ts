import { HTMLAttributes } from 'react';
export interface Props extends HTMLAttributes<HTMLDivElement> {
    /** Use flexbox */
    flex?: boolean;
}
export declare const PageFooter: (props: Props) => JSX.Element;
export default PageFooter;
