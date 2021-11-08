import { Story, Meta } from '@storybook/react'
import HtmlContent, { HtmlContentProps } from '.'
import mock from './mock'

export default {
  title: 'HtmlContent',
  component: HtmlContent,
  args: {
    html: mock
  }
} as Meta

export const Default: Story<HtmlContentProps> = (args) => (
  <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
    <HtmlContent {...args} />
  </div>
)
