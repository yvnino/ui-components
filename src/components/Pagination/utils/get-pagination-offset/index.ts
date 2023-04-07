interface GetPaginationOffset {
  page?: string | number
  pageSize?: number
  maxItems?: number
}

export const DEFAULT_PAGE_SIZE = 5
export const NUMBER_OF_ITEMS_DISPLAY_LIMIT = 10000

export const getPaginationOffset = ({
  page,
  pageSize = DEFAULT_PAGE_SIZE,
  maxItems = NUMBER_OF_ITEMS_DISPLAY_LIMIT
}: GetPaginationOffset) => {
  if (!page) {
    return 0
  }

  const pageNum = Number(page) || 1
  const pageAbs = Math.max(1, pageNum)

  return Math.min((pageAbs - 1) * pageSize, maxItems - pageSize)
}
