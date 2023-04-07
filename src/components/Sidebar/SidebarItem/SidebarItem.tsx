import React, { ReactNode } from 'react'
import ListItem, { ListItemProps } from '@mui/material/ListItem'
import Stack from '@mui/material/Stack'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import { useSidebarContext } from '../Sidebar'

export interface Props extends ListItemProps {
  text: React.ReactNode,
  key?: string | number
  icon?: ReactNode
  onClick?: () => void
}

const SidebarItem = ({ text, key, icon, onClick = () => {}, selected }: Props) => {
  const { mini } = useSidebarContext()
  
  if (mini) {
    return (
      <ListItem key={key} onClick={onClick} selected={selected} button>
        <Stack flexGrow={1} direction='column' alignItems='center' justifyContent='center'>
          {icon && <ListItemIcon style={{ minWidth: 'auto' }}>{icon}</ListItemIcon>}
          <ListItemText primary={text} />
        </Stack>
      </ListItem>
    )
  }

  return (
    <ListItem key={key} onClick={onClick} selected={selected} button>
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      <ListItemText primary={text} />
    </ListItem>
  )
}

export default SidebarItem
