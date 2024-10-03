import type { ReactNode } from 'react'
import React, { forwardRef, useMemo, useCallback, useState } from 'react'
import Truncate from 'react-truncate'
import { Typography, Link } from '../'

import { replaceLineBreaksWithTags } from './utils'

export interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  /** Content of the component */
  children: ReactNode
  /** Number of lines displayed initially */
  rows?: number
  /** Text used by action link showing whole content */
  moreText?: string
  /** Text used by action link hiding whole content */
  lessText?: string
  /** Define component initial state, whether it should be collapsed or not */
  initialExpanded?: boolean
  /** Define whether action link should be displayed or not */
  disableToggle?: boolean
  /** Callback triggered when show more/less is clicked */
  onToggle?: (nextState: boolean) => void
  testIds?: {
    contentWrapper?: string
    toggleButton?: string
  }
}

export const ShowMore = forwardRef<HTMLSpanElement, Props>(function ShowMore(
  props,
  ref
) {
  const {
    children,
    rows = 4,
    initialExpanded = false,
    disableToggle = false,
    moreText = 'Show more',
    lessText = 'Show less',
    onToggle = () => {},
    className,
    style,
    testIds,
    ...rest
  } = props
  const [shownMore, setShownMore] = useState(initialExpanded)
  const [needsTruncation, setNeedsTruncation] = useState(true)
  const content = useMemo(
    () =>
      typeof children === 'string'
        ? replaceLineBreaksWithTags(children)
        : children,
    [children]
  )
  const handleNeedsTruncation = useCallback(
    (truncated: boolean) => setNeedsTruncation(truncated),
    [setNeedsTruncation]
  )

  const isContentVisible = rows !== 0 || shownMore
  const formattedContent = shownMore ? (
    content
  ) : (
    <Truncate onTruncate={handleNeedsTruncation} lines={rows}>
      {content}
    </Truncate>
  )

  return (
    <>
      <Typography
        {...rest}
        ref={ref}
        color='dark-grey'
        className={className}
        style={style}
        data-testid={testIds?.contentWrapper}
      >
        {isContentVisible && formattedContent}
      </Typography>
      {!disableToggle && needsTruncation && (
        <Link
          fontSize={12}
          color='rgb(2, 136, 209)'
          sx={{
            cursor: 'pointer',
          }}
          onClick={() => {
            const nextState = !shownMore

            setShownMore(nextState)
            onToggle(nextState)
          }}
        >
          {shownMore ? lessText : moreText}
        </Link>
      )}
    </>
  )
})

export default ShowMore
