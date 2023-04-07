import React, {
  useContext,
  ReactNode
} from 'react'
import AppBar, { AppBarProps } from '@mui/material/AppBar'
import cx from 'classnames'
import { makeStyles } from '@mui/styles'
import Grid from '@mui/material/Grid'
import { Success } from '../../Icons'
import { PageContext, PageContextProps } from '../'
import styles from './styles'

export interface Props extends AppBarProps {
  /** Title which is displayed along the `Logo` */
  title?: string
  /** Content for the left side of the `Header`  */
  leftContent?: ReactNode
  /** Content for the right side of the `Header`  */
  rightContent?: ReactNode
  /** Content for the center of the `Header`  */
  centerContent?: ReactNode
  /** Action items  */
  actionItems?: ReactNode
  /** should hide on scroll */
  hideOnScroll?: boolean
  /** Color variant */
  varient?: 'dark' | 'light'
  /** logo direction */
  logoAlign?: 'start' | 'center' | 'end'
}

const useStyles = makeStyles(styles, {
  name: 'PageHeader'
})

// eslint-disable-next-line complexity
const PageHeader: React.FC<Props> = (props) => {
  const classes = useStyles(props)
  const {
    rightContent,
    leftContent,
    centerContent,
    actionItems,
    hideOnScroll = false,
    varient,
    logoAlign = 'start',
    ...rest
  } = props
  const { width } = useContext<PageContextProps>(PageContext)

  const innerClassName = cx(
    {
      [classes.fullWidth]: width === 'full',
      [classes.wide]: width === 'wide'
    },
    varient ? classes[varient] : {},
    classes.content
  )
  const wrapperClassnames = cx(
    classes.wrapper,
    varient ? classes[varient] : {},
  )

  return (
    <AppBar className={wrapperClassnames} {...rest} position={hideOnScroll ? 'fixed' : rest.position}>
      <Grid container className={innerClassName}>
        <Grid item className={classes.left}>
          {logoAlign === 'start' ? <Success /> : leftContent}
        </Grid>
        <Grid item className={classes.center}>
          {logoAlign === 'center' ? <Success /> : centerContent}
        </Grid>

        <Grid item className={classes.right}>
          {logoAlign === 'end' ? <Success /> : rightContent}
        </Grid>
      </Grid>
    </AppBar>
  )
}

export default PageHeader
