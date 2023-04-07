/// <reference types="react" />
import { TabProps } from '@mui/material/Tab';
export interface Props extends TabProps {
    secondary?: boolean;
    size?: 'medium' | 'small';
}
declare const Tab: ({ children, ...props }: Props) => JSX.Element;
export default Tab;
