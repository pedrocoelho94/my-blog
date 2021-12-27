import { Story, Meta } from '@storybook/react'
import { VpnKey } from '@styled-icons/material-outlined'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Clique Aqui',
    icon: <VpnKey />
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => (
  <div style={{ padding: '3.2rem' }}>
    <Button {...args} />
  </div>
)
