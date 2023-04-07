import React, { forwardRef } from 'react'
import MUIButton, { ButtonProps } from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Loader from '../Loader'

export interface Props extends ButtonProps {
  iconButton?: React.ReactNode
  loading?: boolean
}

const Button = forwardRef<
  HTMLButtonElement,
  Props
>(function Button(props, ref) {
  const { children, iconButton, loading, ...rest } = props

  if (iconButton) {
    const { onClick } = rest
    const size = rest.size === 'large' ? 'medium' : rest.size

    return (
      <IconButton 
        className={rest.className} 
        onClick={onClick} 
        disabled={rest.disabled} 
        color={rest.color} 
        aria-label={rest['aria-label']} 
        size={size}
        style={{
          boxShadow: 'none'
        }}
      >
        {iconButton}
      </IconButton>
    )
  }

  return (
    <MUIButton
      {...rest}
      ref={ref}
      style={{
        textTransform: 'capitalize'
      }}
    >
      {loading ? <Loader small /> : children}
    </MUIButton>
  )
})

export default Button
