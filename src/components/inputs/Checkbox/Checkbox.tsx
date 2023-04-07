import React from 'react'
import { makeStyles } from '@mui/styles'
import CheckboxMUI, { CheckboxProps } from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import { CheckBoxOutlineBlank, CheckBox as CheckBoxIcon } from '@mui/icons-material'

import Typography from '../../Typography'

import styles from './styles'

const useStyles = makeStyles(styles, {
  name: 'Checkbox'
})

type ProtoExntends<T, U> = U & Omit<T, keyof U>

export type Props = ProtoExntends<CheckboxProps, { labelNode?: React.ReactNode, native?: boolean, label?: string }>

const Checkbox = ({ label, labelNode, native, ref, ...rest }: Props) => {
  const classes = useStyles(rest)

  return (
    <FormControlLabel
      control={
        native ? (
          <input type='checkbox' checked={rest.checked} className={classes.native} />
        ) : (
          <CheckboxMUI
            {...rest}
            classes={{
              root: classes.root
            }}
            color='primary'
            icon={<CheckBoxOutlineBlank className={classes.icon} />}
            checkedIcon={<CheckBoxIcon className={classes.icon} />}
          />
        )
      }
      className={classes.labelWrp}
      style={rest.disabled ? { cursor: 'not-allowed' } : {}}
      label={labelNode || <Typography className={classes.label}>{label}</Typography>}
    />
  )
}

export default Checkbox
