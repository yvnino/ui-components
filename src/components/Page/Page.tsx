import React, { ReactNode, forwardRef, HTMLAttributes } from 'react'
import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'

import { BaseProps, CompoundedComponentWithRef } from '../../types'
import styles from './styles'

export type ViewportWidthType = 'wide' | 'full'

export interface PageContextProps {
  width?: ViewportWidthType
}

export interface Props extends BaseProps, HTMLAttributes<HTMLDivElement> {
  /** Define container width `wide` | `full` */
  width?: ViewportWidthType
  /** Horizontally centers the content */
  centered?: boolean
  /** Children components (`Page.Header`, `Page.Content`, `Page.Footer`) */
  children: ReactNode
}

export const PageContext = React.createContext<PageContextProps>({})

const useStyles = makeStyles<Theme, Props>(styles, {
  name: 'Page'
})

const Page = forwardRef<HTMLElement, Props>(function Page(props) {
  const classes = useStyles(props)
  const { children, width, ...rest } = props

  return (
    <div
      {...rest}
      className={classes.root}
    >
      <PageContext.Provider value={{ width }}>
        {children}
      </PageContext.Provider>
    </div>
  )
}) as CompoundedComponentWithRef<Props, HTMLElement>

export default Page
