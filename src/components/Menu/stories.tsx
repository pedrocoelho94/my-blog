import { Story, Meta } from '@storybook/react'
import Menu, { MenuProps } from '.'
import mock from './mock'

export default {
  title: 'Menu',
  component: Menu,
  args: mock
} as Meta

export const Default: Story<MenuProps> = (args) => (
  <div>
    <Menu {...args} />
  </div>
)
