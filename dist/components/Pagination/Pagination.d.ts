/// <reference types="react" />
export interface Props {
    activePage?: string | number;
    onPageChange: (page: number) => void;
    limit?: number;
    itemCount?: number;
    withCaption?: boolean;
    rowsPerPage?: number;
}
declare const Pagination: ({ activePage, itemCount, limit, onPageChange, withCaption, rowsPerPage }: Props) => JSX.Element | null;
export default Pagination;
