import { Story, Meta } from '@storybook/react'
import PostCard, { PostCardProps } from '.'

import mock from './mock'

export default {
  title: 'PostCard',
  component: PostCard,
  args: mock.posts[0]
} as Meta

export const Default: Story<PostCardProps> = (args) => (
  <div>
    <PostCard {...args} />
  </div>
)
