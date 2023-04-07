import React, { useEffect } from 'react'
import MUIAutocomplete from '@mui/material/Autocomplete'
import { makeStyles } from '@mui/styles'

import MenuItem from '@mui/material/MenuItem'
import Popper, { PopperProps } from '@mui/material/Popper'
import TextInput, { Props as TextInputProps } from '../TextInput'
import Typography from '../../Typography'
import Loader from '../../Loader'
import { Styled } from './styles'

const useStyles = makeStyles(Styled)

interface Option {
  name: string
  value: string | number
}

export interface Props {
  onSelect?: (data: any) => void
  citiesOnly?: boolean
  label?: React.ReactNode
  value?: string | null
  name?: string | undefined
  textInputProps?: TextInputProps
  filterType?: string
  includesIn?: string
  isDisabled?: boolean
  error?: boolean
  searchTypes?: string[]
  options: Option[]
  loading?: boolean
  onInputChange?: (ev: any, data: any) => void
}

const CustomPopper = (props: PopperProps) => {
  const classes = useStyles()

  return <Popper {...props} className={classes.root} />
};

const Autocomplete = React.forwardRef(({ 
  onSelect, 
  options, 
  label = '', 
  value, 
  name, 
  textInputProps = {}, 
  isDisabled, 
  error, 
  onInputChange,
  loading
}: Props, ref) => {
  const classes = useStyles()
  const [currentValue, setValue] = React.useState<string | null>(value || null)
  const [inputValue, setInputValue] = React.useState('')

  useEffect(() => {
    if (!value) {
      setValue('')
    }
  }, [value])

  const handleSelectedOption = async (selectedOption: any) => {
    onSelect?.(selectedOption)
  }

  return (
    <MUIAutocomplete
      ref={ref}
      className={classes.closeIcon}
      loading={loading}
      style={{ width: 300, zIndex: 9999, paddingTop: 0 }}
      disabled={isDisabled}
      PopperComponent={CustomPopper}
      getOptionLabel={(option: any) => (typeof option === 'string' ? option : option.name)}
      popupIcon={null}
      fullWidth
      options={options}
      onChange={(_e, newValue: any | null) => {
        handleSelectedOption(newValue?.value)
      }}
      onInputChange={onInputChange}
      renderInput={(params) => {
          return (
            <TextInput
            name={name}
            ref={params.InputProps.ref}
            label={label}
            type='text'
            {...textInputProps}
            {...params}
            InputProps={{
              ...params.InputProps,
              ...(textInputProps as any)?.InputProps,
              ...(loading ? {
                ...(textInputProps as any)?.InputProps,
                startAdornment: <Loader small color='black' /> 
              } : {})
            }}
            error={!!error} />
          )
      }}
      renderOption={(props, option: any) => {
        return (
              <MenuItem key={option.value} style={{ fontWeight: option.highlight ? 700 : 400 }}>
                <Typography>
                  {option.name}
                </Typography>
              </MenuItem>
        )
      }}
    />
  )
})

export default Autocomplete
