import React from 'react'
import { makeStyles } from '@mui/styles'
import Box from '@mui/material/Box'
import { Typography } from '../'
import { Spinner, Spinner24 } from '../Icons'

import * as S from './styles'
import './spin.css'

const useStyles = makeStyles(S.Styled)

export interface Props {
  color?: string
  small?: boolean
}


const Loader = ({ small }: Props) => {
  const classes = useStyles()

  return (
    <Box
      className={small ? classes.rootSmall : classes.root}
    >
      <Typography height='inherit'>
        {small ? <Spinner24 color='inherit' /> : <Spinner color='inherit'  />}
      </Typography>
    </Box>
  )
}

export default Loader
