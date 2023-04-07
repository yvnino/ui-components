import React from 'react'

import { createStory } from '../../test'
import Button from '../Button'
import NotificationsProvider, { useNotifications } from './'

const TestWrapperChild = () => {
  const {
    showMessage,
    showSuccess,
    showError,
    showInfo,
    showWarning
  } = useNotifications()

  return (
    <div style={{
      height: '600px',
      width: '600px'
    }}>
      <Button onClick={() => showMessage('Default Notification')}>
        Default
      </Button>
      <br />
      <br />
      <Button variant='outlined' onClick={() => showSuccess('Success Notification')}>
        Success
      </Button>
      <br />
      <br />
      <Button variant='outlined' onClick={() => showError('Error Notification')}>
        Error
      </Button>
      <br />
      <br />
      <Button variant='outlined' onClick={() => showInfo('Info Notification')}>
        Info
      </Button>
      <br />
      <br />
      <Button variant='outlined' onClick={() => showWarning('Warning Notification')}>
        Warning
      </Button>
    </div>
  )
}

const TestWrapper = () => (
  <NotificationsProvider>
    <TestWrapperChild />
  </NotificationsProvider>
)

export default {
  title: '/Notifications',
  component: TestWrapper
}

export const Default = createStory(TestWrapper, {})
