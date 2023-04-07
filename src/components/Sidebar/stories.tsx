import React from 'react'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'

import { createStory } from '../../test'
import Sidebar from './'

export default {
  title: '/Sidebar',
  component: Sidebar
}

const CustomizedSidebar = (props: React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar {...props}>
      <Sidebar.Item icon={<InboxIcon />} text='test#1' onClick={() => { alert('test#1') }} />
      <Sidebar.Item icon={<MailIcon />} text='test#2' onClick={() => { alert('test#2') }} />
    </Sidebar>
  )
}

export const Default = createStory(CustomizedSidebar, { variant: 'permanent' })
export const Mini = createStory(CustomizedSidebar, { variant: 'permanent', mini: true })
