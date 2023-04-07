import React from 'react'
import Box from '@mui/material/Box'
import { SnackbarProvider, useSnackbar } from 'notistack'

import Button from '../Button'
import {
  Close,
  Warning,
  Success,
  Error,
  Info
} from '../Icons'

interface Props {
  children: React.ReactNode
}

const CloseSnackbarAction = ({ id }: any) => {
  const { closeSnackbar } = useSnackbar()

  return (
    <Button
      iconButton={<Close color='#fff' />}
      style={{marginTop: "0.1em"}}
      onClick={() => closeSnackbar(id)}
    />
  )
}

const NotificationsProvider = ({
  children
}: Props) => {
  return (
    <SnackbarProvider
      style={{
        backgroundColor: 'rgba(24, 24, 27, 0.8)',
        height: '64px',
        paddingTop: 0,
        paddingBottom: 0
      }}
      iconVariant={{
        success: <Box marginRight='16px' display='flex'><Success /></Box>,
        error: <Box marginRight='16px' display='flex'><Error /></Box>,
        warning: <Box marginRight='16px' display='flex'><Warning /></Box>,
        info: <Box marginRight='16px' display='flex'><Info /></Box>,
      }}
      maxSnack={3}
      anchorOrigin={{
        horizontal: 'center',
        vertical: 'top'
      }}
      action={key => <CloseSnackbarAction id={key} />}
      >
      {children}
    </SnackbarProvider>
  );
}

export default NotificationsProvider
