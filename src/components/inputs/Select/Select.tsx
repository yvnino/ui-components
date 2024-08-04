import React from 'react'
import { withStyles, makeStyles } from '@mui/styles'
import SelectMUI, { SelectProps } from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import InputBase, { InputBaseProps } from '@mui/material/InputBase'

import LabelWrapper, { Props as LabelProps } from '../LabelWrapper'
import * as S from './styles'

type Option<T extends string | number = string | number> = {
  key?: number
  text: string
  value: T
}

export type Props = SelectProps & {
  options: Option[]
  placeholder?: string
  errMsg?: string
  labelProps?: LabelProps
  label?: React.ReactNode
  textInputProps?: InputBaseProps
}

const useStyles = makeStyles(S.Select)
const StyledInput = withStyles(S.Input)(InputBase)

const Select = ({ options, placeholder, errMsg, labelProps, textInputProps, ...rest }: Props) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const handleClick = (ev: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : ev.currentTarget)
  }

  return (
    <LabelWrapper direction='column' {...labelProps}>
      <FormControl style={{ minWidth: '100%' }} component='fieldset' error={!!errMsg}>
        {placeholder && <InputLabel id='select-label'>{placeholder}</InputLabel>}
        <SelectMUI
          {...rest}
          id='select'
          className={classes.root}
          native
          onClick={handleClick}
          input={<StyledInput {...textInputProps} />}
          MenuProps={{
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'left'
            }
          }}
        >
          {options.map((item, index) => {
            return <option key={index} value={item.value}>{item.text}</option>
          })}
        </SelectMUI>
      </FormControl>
    </LabelWrapper>
  )
}

export default Select
