import React, {
  forwardRef,
  FormEventHandler,
  ReactNode,
  FormHTMLAttributes
} from 'react'

import { BaseProps, CompoundedComponentWithRef } from '../../../types'

export interface Props extends BaseProps, FormHTMLAttributes<HTMLFormElement> {
  children?: ReactNode
  onSubmit?: FormEventHandler<HTMLFormElement>
}

export const BaseForm = forwardRef<HTMLFormElement, Props>(function Form(
  { onSubmit, className, style, children, ...rest },
  ref
) {
  return (
    <form
      {...rest}
      ref={ref}
      onSubmit={onSubmit}
      className={className}
      style={style}
    >
      {children}
    </form>
  )
}) as CompoundedComponentWithRef<Props, HTMLFormElement>

export default BaseForm
