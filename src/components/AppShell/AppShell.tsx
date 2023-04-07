
import React, {
  ReactNode,
} from 'react'
import { ModalProvider } from 'react-modal-hook'
import { Helmet } from 'react-helmet-async'

// import FontsLoader from './FontsLoader'
//   import Provider from './UIProvider'
import { CssBaseline } from './CssBaseline'
import { ThemeProvider, DarkModeProvider, NotificationsProvider } from '../'


  const Viewport = () => {
    const content = 'width=device-width, user-scalable=no'
  
    return (
      <Helmet>
        <meta name='viewport' content={content} />
        {/* <body dir={isRTL ? 'rtl' : 'rtl'} /> */}
        {/* <link rel='shortcut icon' href='https://storage.googleapis.com/hoome-imgs/app-assets/images/favicon/favicon-32x32.png' />
        <link rel='icon' href='https://storage.googleapis.com/hoome-imgs/app-assets/images/favicon/favicon.ico' /> */}
      </Helmet>
    )
  }
  
  interface Props {
    children?: ReactNode
  }
  
  const AppShell = ({
    children,
  }: Props) => {
    return (
      <DarkModeProvider>
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
      </DarkModeProvider>
    )
  }
  
  export default AppShell
  