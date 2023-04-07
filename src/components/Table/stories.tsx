import React from 'react'

import { createStory } from '../../test'
import useTableSorting from '../../utils/useTableSorting'
import Typography from '../Typography'
import TableSortLabel from '@mui/material/TableSortLabel'
import Table, { Props } from './'

const SORT_DATA = [{
  name: 'name#1',
  id: 1,
  role: 'role#1',
  team: 'team#1'
}, {
  name: 'name#2',
  id: 2,
  role: 'role#2',
  team: 'team#2'
}, {
  name: 'name#3',
  id: 3,
  role: 'role#3',
  team: 'team#3'
}, {
  name: 'name#4',
  id: 4,
  role: 'role#4',
  team: 'team#4'
}]

const ExampleSort = ({ variant }: { variant?: Props['variant']}) => { 
  const { orderDirection, onSorting, orderBy, stableSort } = useTableSorting('name')
   
  return (
    <Table variant={variant}>
    <Table.Head>
      <Table.Row>
        <Table.Cell colSpan={2}>
          <TableSortLabel
            active={orderBy ==='name'}
            direction={orderBy === 'name' ? orderDirection : 'asc'}
            onClick={() => onSorting('name')}
          >
          Name
          </TableSortLabel>
        </Table.Cell>
        <Table.Cell colSpan={2}>
        <TableSortLabel
            active={orderBy ==='id'}
            direction={orderBy === 'id' ? orderDirection : 'asc'}
            onClick={() => onSorting('id')}
          >
          ID
          </TableSortLabel>
        </Table.Cell>
        <Table.Cell colSpan={2}>
        <TableSortLabel
            active={orderBy ==='role'}
            direction={orderBy === 'role' ? orderDirection : 'asc'}
            onClick={() => onSorting('role')}
          >
          Role
          </TableSortLabel>
        </Table.Cell>
        <Table.Cell colSpan={2}>
        <TableSortLabel
            active={orderBy ==='team'}
            direction={orderBy === 'team' ? orderDirection : 'asc'}
            onClick={() => onSorting('team')}
          >
          Team
          </TableSortLabel>
        </Table.Cell>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      {
        stableSort(SORT_DATA).map((val: any) => (
        <Table.Row key={val + '_test'}>
          <Table.Cell colSpan={2}>
            <Typography>
            {val.name}
            </Typography>
          </Table.Cell>
          <Table.Cell colSpan={2}>
            <Typography>
            {val.id}
            </Typography>
          </Table.Cell>
          <Table.Cell colSpan={2}>
            <Typography>
            {val.role}
            </Typography>
          </Table.Cell>
          <Table.Cell colSpan={2}>
            <Typography>
            {val.team}
            </Typography>
          </Table.Cell>
        </Table.Row>
        ))
      }
    </Table.Body>
  </Table>
  )
}



const Example = ({ variant }: { variant?: Props['variant']}) => {  
  return (
    <Table variant={variant}>
    <Table.Head>
      <Table.Row>
        <Table.Cell colSpan={2}>
          Test 1
        </Table.Cell>
        <Table.Cell colSpan={2}>
          Test 2
        </Table.Cell>
        <Table.Cell colSpan={2}>
          Test 3
        </Table.Cell>
        <Table.Cell colSpan={2}>
          Test 4
        </Table.Cell>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      {
        [0, 1, 2, 3].map((val) => (
        <Table.Row key={val + '_test'}>
          <Table.Cell colSpan={2}>
            Test 1 body
          </Table.Cell>
          <Table.Cell colSpan={2}>
            Test 2 body
          </Table.Cell>
          <Table.Cell colSpan={2}>
            Test 3 body
          </Table.Cell>
          <Table.Cell colSpan={2}>
            Test 4 body
          </Table.Cell>
        </Table.Row>
        ))
      }
    </Table.Body>
  </Table>
  )
}

export default {
  title: '/Table',
  component: Example
}

export const striped = createStory(Example, {
  variant: 'striped'
})

export const Clear = createStory(Example, {
  variant: 'transparent'
})

export const WithSort = createStory(ExampleSort, {
  variant: 'transparent'
})
