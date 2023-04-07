import React from 'react'
import { makeStyles } from '@mui/styles'
import {
  TablePagination,
  Pagination as BasePagination,
  PaginationItem,
} from '@mui/material'

import styles from './styles'

const NUMBER_OF_ITEMS_DISPLAY_LIMIT = 10000

const DEFAULT_PAGE = 1

const parsePage = (page?: string | number) =>
  (page && Number(page)) || DEFAULT_PAGE

const getTotalPages = (limit?: number, itemCount?: number) =>
  limit && itemCount ? Math.ceil(itemCount / limit) : undefined

export interface Props {
  activePage?: string | number
  onPageChange: (page: number) => void
  limit?: number
  itemCount?: number
  withCaption?: boolean
  rowsPerPage?: number
}

const useStyles = makeStyles(styles)

const Pagination= ({
  activePage = DEFAULT_PAGE,
  itemCount,
  limit,
  onPageChange,
  withCaption,
  rowsPerPage
}: Props) => {
  const classes = useStyles()
  const totalCount =
    itemCount && Math.min(itemCount, NUMBER_OF_ITEMS_DISPLAY_LIMIT)
  const totalPages = getTotalPages(limit, totalCount)

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    onPageChange(value)
  }

  if (!totalPages || totalPages < 2) {
    return null
  }

  return (
    <>
    {
      withCaption && (
        <TablePagination
          component='div'
          count={totalCount || 0}
          rowsPerPageOptions={[]}
          page={parsePage(activePage) - 1}
          ActionsComponent={() => null}
          rowsPerPage={limit || 5}
          onPageChange={() => {}}
        />
      )
    }
    <BasePagination
      classes={{
        ul: classes.root
      }}
      size='small'
      shape='rounded'
      renderItem={(params) => <PaginationItem {...params} classes={{ root: classes.button, selected: classes.selected }} />}
      page={parsePage(activePage)}
      onChange={handleChange}
      count={totalPages}
    />
    </>
  )
}

export default Pagination
