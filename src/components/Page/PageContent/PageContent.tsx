import React, { useContext, ReactNode, HTMLAttributes } from 'react'
import { makeStyles } from '@mui/styles'
import cx from 'classnames'

import { PageContext, PageContextProps } from '../'
import styles from './styles'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** Custom components that render content of page */
  children: ReactNode
  /** Use flexbox */
  flex?: boolean
}

const useStyles = makeStyles(styles, {
  name: 'PageContent'
})

const PageContent = (props: Props) => {
    const { children, className, style, flex, ...rest } = props
    const classes = useStyles(props)
    const { width } = useContext<PageContextProps>(PageContext)

    const innerClassName = cx(
      {
        [classes.fullWidth]: width === 'full',
        [classes.wide]: width === 'wide',
        [classes.flex]: flex
      },
      classes.content
    )

    return (
      <div
        {...rest}
        className={cx(classes.root, className)}
        style={style}
      >
        <div className={innerClassName}>{children}</div>
      </div>
    )
}

export default PageContent
