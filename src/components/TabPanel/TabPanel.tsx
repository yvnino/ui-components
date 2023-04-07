import React, { ReactNode } from 'react'
import Box from '@mui/material/Box'

export interface Props {
  children?: ReactNode
  value: number
  index: number
}

const TabPanel = (props: Props) => {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  )
}

export default TabPanel
