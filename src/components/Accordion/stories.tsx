import React, { useState } from 'react'
import { createStory } from '../../test'
import { Grid } from '@mui/material'
import Typography from '../Typography'
import Accordion from './'

const Example = () => {
  const [currentStep, setCurerntStep] = useState(0)

  return (
    <Grid container direction='column' spacing={1}>
      <Grid item>
        <Accordion expanded={currentStep === 0} onChange={() => setCurerntStep(0)}>
          <Accordion.Header>
            <Typography>
              Header #1
            </Typography>
          </Accordion.Header>
          <Accordion.Content>
            <Typography>
              Content #1
            </Typography>
          </Accordion.Content>
        </Accordion>
      </Grid>
      <Grid item>
        <Accordion expanded={currentStep === 1} onChange={() => setCurerntStep(1)}>
          <Accordion.Header>
            <Typography>
              Header #2
            </Typography>
          </Accordion.Header>
          <Accordion.Content>
            <Typography>
              Content #2
            </Typography>
          </Accordion.Content>
        </Accordion>
      </Grid>
      <Grid item>
        <Accordion expanded={currentStep === 2} onChange={() => setCurerntStep(2)}>
          <Accordion.Header>
            <Typography>
              Header #3
            </Typography>
          </Accordion.Header>
          <Accordion.Content>
            <Typography>
              Content #3
            </Typography>
          </Accordion.Content>
        </Accordion>
      </Grid>
    </Grid>
  )
}

export default {
  title: '/Accordion',
  component: Example
}

export const Default = createStory(Example, {
})
