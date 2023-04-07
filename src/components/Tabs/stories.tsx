import React, { useState } from 'react'
import { createStory } from '../../test'
import { Box, Grid, Paper } from '@mui/material'
import Typography from '../Typography'
import Tabs from './'
import Tab from '../Tab'
import TabPanel from '../TabPanel'

const Example = () => {
  const [activeTab, setActiveTab] = useState(1)

  return (
    <Box>
      <Tabs value={activeTab} onChange={setActiveTab}>
        <Tab value={1} label='Tab #1' />
        <Tab value={2} label='Tab #2' />
      </Tabs>
      <TabPanel value={activeTab} index={1}>
      <Box>
        View #1
      </Box>
      </TabPanel>
      <TabPanel value={activeTab} index={2}>
      <Box>
        View #2
      </Box>
      </TabPanel>
    </Box>
  )
}

export default {
  title: '/Tabs',
  component: Example
}

export const Default = createStory(Example, {
})
