import React, { ReactNode } from 'react'
import Grid from '@mui/material/Grid'

import { Typography } from '../'

export interface Props {
  children?: ReactNode
  direction?: 'row' | 'column'
  label?: string | ReactNode | undefined | null
  icon?: ReactNode
  style?: React.CSSProperties
}

export const LabelWrapper = (
  {
    children,
    direction = 'row',
    label,
    icon,
    style = {},
  }: Props
) => {
  if (!label) {
    return <>{children}</>
  }

  const align = direction === 'row' ? 'center' : 'stretch'
  const wrap = direction === 'row' ? 'nowrap' : 'wrap'

  return (
    <Grid container direction={direction} spacing={1} alignItems={align} wrap={wrap}>
      <Grid item>
        <Grid container alignItems='center' spacing={1}>
          {
            !!icon && (
              <Grid item>
                {icon}
              </Grid>
            )
          }
          <Grid item style={{ width: 'max-content' }}>
            <Typography>{label}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid style={style} item container>{children}</Grid>
    </Grid>
  )
}

export default LabelWrapper
