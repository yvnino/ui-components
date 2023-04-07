import React, { useContext, HTMLAttributes } from 'react'
import { makeStyles } from '@mui/styles'
import cx from 'classnames'

import Typography from '../../Typography'
import { PageContext, PageContextProps } from '../'
import styles from './styles'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** Use flexbox */
  flex?: boolean
}

const useStyles = makeStyles(styles, {
  name: 'PageFooter'
})

export const PageFooter = (props: Props) => {
    const { className, style, flex = true, ...rest } = props
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
      <footer
        {...rest}
        className={cx(classes.root, className)}
        style={style}
      >
        <div className={innerClassName}>
          <Typography color='inherit'>some right</Typography>
        </div>
      </footer>
    )
}

export default PageFooter
