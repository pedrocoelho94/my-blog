import { Story, Meta } from '@storybook/react'
import LogoLink, { LogoLinkProps } from '.'

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'LogoLink',
    srcImg: 'assets/images/me.jpg',
    link: 'http://localhost/',
    newTab: false
  }
} as Meta

export const ImageOnly: Story<LogoLinkProps> = (args) => (
  <div>
    <LogoLink {...args} />
  </div>
)

export const TextOnly: Story<LogoLinkProps> = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  )
}

TextOnly.args = {
  srcImg: ''
}
