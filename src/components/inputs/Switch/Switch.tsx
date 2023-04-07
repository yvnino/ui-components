import React from 'react'
import { makeStyles } from '@mui/styles'
import FormControlLabel from '@mui/material/FormControlLabel'
import SwitchMUI, { SwitchProps } from '@mui/material/Switch'

import * as S from './styles'

export interface Props extends SwitchProps {
  label?: React.ReactNode
}

const useStyles = makeStyles(S.Switch, {
  name: 'Switch'
})

export const Switch = ({ 
  label, ...props
}: Props) => {
  const classes = useStyles(props)

  return (
    <FormControlLabel
        control={
          <SwitchMUI
            focusVisibleClassName={classes.focusVisible}
            disableRipple
            classes={{
              root: classes.root,
              switchBase: classes.switchBase,
              thumb: classes.thumb,
              track: classes.track,
              checked: classes.checked,
            }}
            {...props}
          />
        }
        label={label}
        className={classes.labelRoot}
      />
  )
}

export default Switch
