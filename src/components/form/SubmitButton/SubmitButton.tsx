import React from 'react'
import { useFormState } from 'react-final-form'

import Button, { ButtonProps } from '../../Button'

export type Props = Omit<ButtonProps, 'type'> & {
  id?: string
}

export const SubmitButton = (props: Props) => {
  const { submitting } = useFormState({ subscription: { submitting: true } })

  return (
    <Button
      type='submit'
      disabled={submitting}
      variant='outlined'
      color='primary'
      {...props}
    />
  )
}

export default SubmitButton
