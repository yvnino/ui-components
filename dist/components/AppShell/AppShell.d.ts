import { ReactNode } from 'react';
interface Props {
    children?: ReactNode;
    darkModeInitState?: boolean;
}
declare const AppShell: ({ children, darkModeInitState, }: Props) => JSX.Element;
export default AppShell;
