import React from 'react'
import { makeStyles } from '@mui/styles'
import Box from '@mui/material/Box'
import { Spinner, Spinner24 } from '../Icons'

import * as S from './styles'

const useStyles = makeStyles(S.Styled)

export interface Props {
  color?: string
  small?: boolean
}


const Loader = ({ color = 'white', small }: Props) => {
  const classes = useStyles()

  return (
    <Box
      className={small ? classes.rootSmall : classes.root}
    >
      {small ? <Spinner24 color={color} /> : <Spinner color={color} />}
    </Box>
  )
}

export default Loader
