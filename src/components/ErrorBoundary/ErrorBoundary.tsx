import React from 'react'
import type { ReactElement, ReactNode } from 'react'
import { Component } from 'react'
import { Container } from '../'

export interface Props {
  /** In case of an error nothing will be rendered */
  emptyOnError?: boolean
  /** Component will be shown on error instead of content */
  errorComponent?: ReactElement
  /** Re-throw error to the top if caught some */
  bubbleUpError?: boolean
  /** Inner content while no errors */
  children: ReactNode
}

export interface State {
  hasError: boolean
}

const ErrorDefault = () => {
  return <Container>Some Error happen</Container>
}

export default class WidgetErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  get isThrowingErrorEnabled() {
    return !!this.props.bubbleUpError
  }

  componentDidCatch(error: Error) {
    if (this.isThrowingErrorEnabled) {
      throw error
    }

    // will force re-render
    this.setState({ hasError: true })
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children
    }

    return this.props.emptyOnError
      ? null
      : this.props.errorComponent || <ErrorDefault />
  }
}
