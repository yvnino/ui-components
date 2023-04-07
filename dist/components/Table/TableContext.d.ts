/// <reference types="react" />
import { TableVariant } from './';
export interface TableConfig {
    variant: TableVariant;
}
declare const TableContext: import("react").Context<TableConfig>;
export default TableContext;
