import { Story, Meta } from '@storybook/react'
import Footer, { FooterProps } from '.'

export default {
  title: 'Footer',
  component: Footer,
  args: {
    footerHtml: `<p><a href="https://github.com/pedrocoelho94">Feito com ❤ por Pedro Coelho</a></p>`
  }
} as Meta

export const Default: Story<FooterProps> = (args) => (
  <div style={{ marginTop: '200px' }}>
    <Footer {...args} />
  </div>
)
