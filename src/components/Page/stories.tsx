import React from 'react'
import Button from '../Button'
import MenuIcon from '@mui/icons-material/Menu'
import MailIcon from '@mui/icons-material/Mail'

import Sidebar from '../Sidebar'
import Typography from '../Typography'
import { createStory } from '../../test'
import Page from './'
import Header from './PageHeader'
import Content from './PageContent'
import Footer from './PageFooter'

export default {
  title: '/Page',
  component: Page
}

const CustomizedPage: React.FC<{hideOnScroll?: boolean, withSidebar?: boolean, varient?: 'dark' | 'light'}> = ({ withSidebar, hideOnScroll, varient = 'dark' }) => {
  return (
    <div style={{ height: '30rem' }}>
      <Page>
        <Header
          varient={varient}
          logoAlign='start'
          position='absolute'
          hideOnScroll={hideOnScroll}
        />
        {withSidebar && (
          <Sidebar variant='permanent'>
            <Sidebar.Item icon={<MailIcon />} text='test#2' onClick={() => { alert('test#2') }} />
          </Sidebar>
        )}
        <Content>
        <Typography gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          </Typography><Typography gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          </Typography>
          <Typography gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          </Typography>
          <Typography gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          </Typography>
          <Typography gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          </Typography>
          <Typography gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          </Typography>
          <Typography gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          </Typography>
        </Content>
        <Footer />
      </Page>
    </div>
  )
}

export const Default = createStory(CustomizedPage, {})

export const WithSidebar = createStory(CustomizedPage, {
  withSidebar: true
})
