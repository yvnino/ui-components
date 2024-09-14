
import React, {
  ReactNode,
} from 'react'
import { ModalProvider } from 'react-modal-hook'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import { CssBaseline } from './CssBaseline'
import { ThemeProvider, DarkModeProvider, NotificationsProvider } from '../'


  const Viewport = () => {
    const content = 'width=device-width, user-scalable=no'
  
    return (
      <Helmet>
        <meta name='viewport' content={content} />
        {/* <link rel='shortcut icon' href='' />
        <link rel='icon' href='' /> */}
      </Helmet>
    )
  }
  
  interface Props {
    children?: ReactNode
    darkModeInitState?: boolean
  }
  
  const AppShell = ({
    children,
    darkModeInitState,
  }: Props) => {
    return (
      <DarkModeProvider initState={darkModeInitState}>
        <HelmetProvider>
          <ThemeProvider>
            <CssBaseline />
            <Viewport />
            {/* <FontsLoader /> */}
            <NotificationsProvider>
              <ModalProvider>
                {children}
              </ModalProvider>
            </NotificationsProvider>
          </ThemeProvider>
        </HelmetProvider>
      </DarkModeProvider>
    )
  }
  
  export default AppShell
  