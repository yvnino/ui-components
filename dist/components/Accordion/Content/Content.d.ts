/// <reference types="react" />
import { AccordionDetailsProps } from '@mui/material/AccordionDetails';
export interface Props extends AccordionDetailsProps {
    color?: 'primary' | 'primary-dark' | 'secondary' | 'secondary-dark';
}
declare const Content: ({ children, ...rest }: Props) => JSX.Element;
export default Content;
