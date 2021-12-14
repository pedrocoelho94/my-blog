import { Story, Meta } from '@storybook/react'
import Sponsor, { SponsorProps } from '.'

import mock from './mock'

export default {
  title: 'Sponsor',
  component: Sponsor,
  args: mock
} as Meta

export const Default: Story<SponsorProps> = (args) => (
  <div style={{ maxWidth: '250px' }}>
    <Sponsor {...args} />
  </div>
)
