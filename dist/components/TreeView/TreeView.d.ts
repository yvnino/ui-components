import { TreeViewProps } from '@mui/lab/TreeView';
import { CompoundedComponentWithRef } from '../../types';
import Item from './Item';
export interface StaticProps {
    Item: typeof Item;
}
declare const TreeView: CompoundedComponentWithRef<TreeViewProps, HTMLElement, StaticProps>;
export default TreeView;
