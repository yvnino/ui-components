import React, { useState } from 'react'

import { createStory } from '../../test'
import Pagination from './Pagination'

const Example = () => { 
  const [currentPage, setCurrentPage] = useState(1)
   
  return (
    <Pagination
      withCaption
      activePage={currentPage}
      itemCount={20}
      limit={6}
      onPageChange={setCurrentPage}
    />
  )
}

export default {
  title: '/Pagination',
  component: Example
}

export const Default = createStory(Example, {})
