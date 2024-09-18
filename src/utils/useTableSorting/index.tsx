import { useState } from 'react'

interface UseTableSorting {
  onSorting: (property: string | number) => void
  orderBy: string | number
  orderDirection: Order
  stableSort: (array: any[]) => any
}

type Order = 'asc' | 'desc';

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function useTableSorting(initOrder: string | number, initDrderDirection?: Order): UseTableSorting {
  const [order, setOrder] = useState<Order>(initDrderDirection || 'desc');
  const [orderBy, setOrderBy] = useState<string | number>(initOrder);

  const handleRequestSort = (property: string | number) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  }

  function stableSort<T>(array: T[]) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    const comparator = getComparator(order, orderBy)

    stabilizedThis.sort((a, b) => {
      const orderDirection = comparator(a[0] as any, b[0] as any);
      if (orderDirection !== 0) return orderDirection;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  return {
    onSorting: handleRequestSort,
    orderBy,
    orderDirection: order,
    stableSort
  }
}

export default useTableSorting
