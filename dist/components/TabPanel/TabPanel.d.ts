import { ReactNode } from 'react';
export interface Props {
    children?: ReactNode;
    value: number;
    index: number;
}
declare const TabPanel: (props: Props) => JSX.Element;
export default TabPanel;
