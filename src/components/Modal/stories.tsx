import React from 'react'
import Box from '@mui/material/Box'

import { createStory } from '../../test'
import Button from '../Button'
import Typography from '../Typography'
import Modal from './'
import { useModal } from '../../hooks/useModal'


const Example = () => {
  const { showModal, hideModal, isOpen } = useModal()
  
  return (
    <>
    <Button variant='outlined' onClick={showModal}>
      Open Modal
    </Button>
    <Modal open={isOpen}>
      <Modal.Title onClose={hideModal}>
        test Modal
      </Modal.Title>
      <Modal.Content>
        <Box width='400px'>
        <Typography fontSize='large'>
          Modal Content
        </Typography>
        </Box>
      </Modal.Content>
      <Modal.Actions>
        <Button color='primary' onClick={hideModal}>
          <Typography>
            Close
          </Typography>
        </Button>
        <Button color='primary' variant='contained' onClick={hideModal}>
          <Typography>
            Submit
          </Typography>
        </Button>
      </Modal.Actions>
    </Modal>
    </>
  )
}

export default {
  title: '/Modal',
  component: Example
}

export const Default = createStory(Example, {})
