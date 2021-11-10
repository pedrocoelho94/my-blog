import { Story, Meta } from '@storybook/react'
import Post, { PostsProps } from '.'

import mock from './mock'

export default {
  title: 'Posts/Post',
  component: Post,
  args: mock
} as Meta

export const Default: Story<PostsProps> = (args) => (
  <div>
    <Post {...args} />
  </div>
)
