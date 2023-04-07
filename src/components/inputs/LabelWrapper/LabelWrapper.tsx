import React from 'react'
import Grid, { GridProps } from '@mui/material/Grid'

import Typography from '../../Typography'

export interface Props {
  children?: React.ReactNode
  label?: React.ReactNode
  direction?: GridProps['direction']
}

const LabelWrapper = (
  {
    children,
    direction = 'column',
    label
  }: Props
) => {
  if (!label) return <>{children}</>

  const align = direction === 'row' ? 'center' : 'stretch'
  const wrap = direction === 'row' ? 'nowrap' : 'wrap'

  return (
    <Grid container direction={direction as GridProps['direction']} spacing={direction === 'row' ? 4 : 0} alignItems={align} wrap={wrap}>
      <Grid item style={{ width: 'max-content', padding: 0 }} sm={direction === 'row' ? 4 : 'auto'}>
        <Typography color='textSecondary'>{label}</Typography>
      </Grid>
      <Grid item container sm={direction === 'row' ? 8 : 'auto'}>{children}</Grid>
    </Grid>
  )
}

export default LabelWrapper
