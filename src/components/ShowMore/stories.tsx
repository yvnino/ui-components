import React from 'react'
import { createStory } from '../../test'

import ShowMore from './ShowMore'

export default {
  title: '/ShowMore',
  component: ShowMore,
}

const Wrapper = () => (
  <div style={{ width: '300px' }}>
    <ShowMore rows={1}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac purus sit amet nisl tincidunt tincidunt. Nullam nec
    </ShowMore>
  </div>
)

export const Default = createStory(Wrapper, {})
