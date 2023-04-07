import React from 'react'
import { createStory } from '../../test'
import { Box, Grid, Paper } from '@mui/material'
import * as icons from './'
import Typography from '../Typography'

const Example = () => {
  const { Warning, Info, Success, Success24, Error, ...rest } = icons
  const iconList = Object.keys(rest)
  const notificationIcons = Object.keys({ Warning, Info, Success, Success24, Error})

  return (
    <Box>
      <Grid container spacing={2}>
        {
          iconList.map((iconName) => {
            const Icon = (icons as any)[iconName]

            return (
              <Grid item>
                <Paper>
                  <Box
                    display='flex'
                    alignItems='center'
                    padding='8px'
                    minWidth='9rem'
                    height='7rem'
                    >
                      <Grid container alignItems='center' direction='column' spacing={1}>
                        <Grid item>
                          <Icon />
                        </Grid>
                        <Grid item>
                          <Typography fontSize='12px'>
                            {iconName}
                          </Typography>
                        </Grid>
                      </Grid>
                  </Box>
                </Paper>
              </Grid>
            )
          })
        }
      </Grid>
      <br/>
      <Box marginY='40px'>
        <Typography>
        Notification Icons
        </Typography>
      </Box>
      <br/>
      <Grid container spacing={2}>
        {
          notificationIcons.map((iconName) => {
            const Icon = (icons as any)[iconName]

            return (
              <Grid item>
                <Paper>
                  <Box
                    display='flex'
                    alignItems='center'
                    padding='8px'
                    minWidth='9rem'
                    height='7rem'
                    >
                      <Grid container alignItems='center' direction='column' spacing={1}>
                        <Grid item>
                          <Icon />
                        </Grid>
                        <Grid item>
                          <Typography fontSize='12px'>
                            {iconName}
                          </Typography>
                        </Grid>
                      </Grid>
                  </Box>
                </Paper>
              </Grid>
            )
          })
        }
      </Grid>
    </Box>
  )
}

export default {
  title: '/Icons',
  component: Example
}

export const AllIcons = createStory(Example, {
})