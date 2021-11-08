import { Story, Meta } from '@storybook/react'
import theme from 'styles/theme'
import MenuLink, { MenuLinkProps } from '.'

export default {
  title: 'MenuLink',
  component: MenuLink,
  args: {
    children: 'MenuLink',
    link: 'https://www.google.com.br/'
  },
  parameters: {
    backgrounds: {
      default: 'light'
    }
  }
} as Meta

export const Default: Story<MenuLinkProps> = (args) => (
  <div
    style={{
      maxWidth: '320px',
      background: theme.colors.primary,
      padding: theme.spacings.large
    }}
  >
    <MenuLink {...args} />
    <MenuLink {...args} />
    <MenuLink {...args} />
    <MenuLink {...args} />
  </div>
)
