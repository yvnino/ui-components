import { ReactNode } from 'react';
import { TabsProps } from '@mui/material/Tabs';
export interface Props extends TabsProps {
    children?: ReactNode;
    onChange?: (val: any) => void;
    secondary?: boolean;
}
declare const Tabs: ({ children, onChange, ...props }: Props) => JSX.Element;
export default Tabs;
