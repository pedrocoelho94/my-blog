import { Story, Meta } from '@storybook/react'
import HeadingBar, { HeadingBarProps } from '.'
import { ListAlt } from '@styled-icons/material-outlined/ListAlt'

export default {
  title: 'HeadingBar',
  component: HeadingBar,
  args: {
    children: 'oba',
    icon: <ListAlt />
  }
} as Meta

export const Default: Story<HeadingBarProps> = (args) => (
  <HeadingBar {...args} />
)
