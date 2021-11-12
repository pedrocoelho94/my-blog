import { Story, Meta } from '@storybook/react'
import PostTemplate, { PostTemplateProps } from '.'

import mock from './mock'

export default {
  title: 'Templates/PostTemplate',
  component: PostTemplate,
  args: mock
} as Meta

export const Default: Story<PostTemplateProps> = (args) => (
  <div>
    <PostTemplate {...args} />
  </div>
)
