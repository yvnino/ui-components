import { createStory } from '../../test'
import BreadCrumb from './'

export default {
  title: '/BreadCrumb',
  component: BreadCrumb
}

export const Default = createStory(BreadCrumb, {
  pathArr: [{
    url: 'reports/list',
    label: 'Reports'
  }, {
    label: 'Create report'
  }]
})
