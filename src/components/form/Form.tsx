import React, { useCallback, ReactNode, useRef } from 'react'
import {
  Form as FinalForm,
  FormProps as FinalFormProps
} from 'react-final-form'
import { FormApi, ValidationErrors, getIn, setIn, SubmissionErrors } from 'final-form'

import BaseForm from './Base'
import {
  FormContext,
  Validators,
  FormContextProps,
  createFormContext
} from './FormContext'

type AnyObject = Record<string, any>

export type Props<T = AnyObject> = FinalFormProps<T> & {
  successSubmitMessage?: ReactNode
  failedSubmitMessage?: ReactNode
  scrollOffsetTop?: number
}

const getSubmitErrors = (
  validationObject: Validators,
  formValues: any,
  form: FormApi<any>
) =>
  Object.entries(validationObject).reduce<ValidationErrors | undefined>(
    (result, [key, validator]) => {
      const error: string = validator?.(
        getIn(formValues, key),
        formValues,
        form.getFieldState(key)
      )

      if (error) {
        return setIn(result || {}, key, error)
      }

      return result
    },
    undefined
  )

export const Form = <T extends AnyObject = AnyObject>(props: Props<T>) => {
  const {
    children,
    onSubmit,
    successSubmitMessage,
    failedSubmitMessage,
    decorators = [],
    ...rest
  } = props
  const validationObject = useRef<FormContextProps>(createFormContext())

  const handleSubmit = useCallback(
    async (values: T, form: FormApi<T>, callback?: (errors: SubmissionErrors) => void) => {
      const validationErrors = getSubmitErrors(
        validationObject.current.getValidators(),
        values,
        form
      )

      if (validationErrors) {
        return validationErrors
      }

      const errors = await onSubmit(values, form, callback)

      return errors
    },
    [
      failedSubmitMessage,
      onSubmit,
      successSubmitMessage
    ]
  )

  return (
    <FormContext.Provider value={validationObject}>
      <FinalForm
        render={({ handleSubmit }) => (
          <BaseForm className={rest.className} onSubmit={handleSubmit}>{<>{children}</>}</BaseForm>
        )}
        onSubmit={handleSubmit}
        decorators={[...decorators]}
        {...rest}
      />
    </FormContext.Provider>
  )
}

export default Form
