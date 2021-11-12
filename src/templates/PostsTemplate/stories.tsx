import { Story, Meta } from '@storybook/react'
import PostsTemplate, { PostsTemplateProps } from '.'

import mock from './mock'

export default {
  title: 'Templates/PostsTemplate',
  component: PostsTemplate,
  args: mock
} as Meta

export const Default: Story<PostsTemplateProps> = (args) => (
  <div>
    <PostsTemplate {...args} />
  </div>
)
