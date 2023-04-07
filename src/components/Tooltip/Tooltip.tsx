import React, { forwardRef } from 'react'
import { makeStyles } from '@mui/styles'
import { Info } from '../Icons'
import MUITooltip, { TooltipProps } from '@mui/material/Tooltip'
import Box from '@mui/material/Box'

import * as S from './styles'

const useStyles = makeStyles(S.StyledTooltip)

const Tooltip = (
  props: TooltipProps
) => {
  const { children, ...rest } = props
  const classes = useStyles(props)

  return (
    <MUITooltip
      {...rest}
      classes={{ popper: classes.root }}
    >
      <Box width='fit-content'>
        {children || <Info className={classes.icon} />}
      </Box>
    </MUITooltip>
  )
}

export default Tooltip
