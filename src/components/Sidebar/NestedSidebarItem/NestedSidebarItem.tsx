import React, { ReactNode } from 'react'
import { makeStyles } from '@mui/styles'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'

import * as S from './styles'

const useStyles = makeStyles(S.StyledNestedItem)

export interface Props {
  text: string,
  key?: string | number
  icon?: ReactNode
  isOpen?: boolean
  children: React.ReactNode
}

const NestedSidebarItem = (props: Props) => {
  const classes = useStyles(props)

  const { text, key, icon, children, isOpen = false } = props
  const [open, setOpen] = React.useState<boolean>(isOpen)

  const handleClick = (e: any) => {
    e?.stopPropagation()
    setOpen(!open)
  }

  return (
    <>
      <ListItem button key={key || text} onClick={handleClick}>
        {icon && <ListItemIcon>{icon}</ListItemIcon>}
        <ListItemText primary={text} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' className={classes.nested}>
          {children}
        </List>
      </Collapse>
    </>
  )
}

export default NestedSidebarItem
