import { AccordionProps } from '@mui/material/Accordion';
import { CompoundedComponentWithRef } from '../../types';
import Header from './Header';
import Content from './Content';
export interface StaticProps {
    Header: typeof Header;
    Content: typeof Content;
}
export interface Props extends AccordionProps {
}
declare const Accordion: CompoundedComponentWithRef<Props, HTMLElement, StaticProps>;
export default Accordion;
