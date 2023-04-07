import { ReactNode } from 'react';
import { AppBarProps } from '@mui/material/AppBar';
export interface Props extends AppBarProps {
    /** Title which is displayed along the `Logo` */
    title?: string;
    /** Content for the left side of the `Header`  */
    leftContent?: ReactNode;
    /** Content for the right side of the `Header`  */
    rightContent?: ReactNode;
    /** Content for the center of the `Header`  */
    centerContent?: ReactNode;
    /** Action items  */
    actionItems?: ReactNode;
    /** should hide on scroll */
    hideOnScroll?: boolean;
    /** Color variant */
    varient?: 'dark' | 'light';
    /** logo direction */
    logoAlign?: 'start' | 'center' | 'end';
}
declare const PageHeader: (props: Props) => JSX.Element;
export default PageHeader;
