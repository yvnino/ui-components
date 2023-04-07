interface UseTableSorting {
    onSorting: (property: string | number) => void;
    orderBy: string | number;
    orderDirection: Order;
    stableSort: (array: any[]) => any;
}
type Order = 'asc' | 'desc';
declare function useTableSorting(initOrder: string | number): UseTableSorting;
export default useTableSorting;
