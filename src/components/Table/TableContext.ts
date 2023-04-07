import { createContext } from 'react'

import { TableVariant } from './'

export interface TableConfig {
  variant: TableVariant
}

const TableContext = createContext<TableConfig>({
  variant: 'striped'
})

export default TableContext
