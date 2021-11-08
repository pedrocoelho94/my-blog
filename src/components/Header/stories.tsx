import { Story, Meta } from '@storybook/react'
import Header, { HeaderProps } from '.'
import mock from './mock'

export default {
  title: 'Header',
  component: Header,
  args: mock
} as Meta<HeaderProps>

export const Default: Story<HeaderProps> = (args) => (
  <div>
    <Header {...args} />
  </div>
)
