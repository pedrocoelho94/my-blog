import { Story, Meta } from '@storybook/react'
import PostGrid, { PostGridProps } from '.'

import mock from './mock'

export default {
  title: 'PostGrid',
  component: PostGrid,
  args: mock
} as Meta

export const Default: Story<PostGridProps> = (args) => (
  <div style={{ maxWidth: '98rem', margin: '0 auto' }}>
    <PostGrid {...args} />
  </div>
)

export const WithoutPosts: Story<PostGridProps> = (args) => (
  <div style={{ maxWidth: '98rem', margin: '0 auto' }}>
    <PostGrid {...args} />
  </div>
)

WithoutPosts.args = {
  posts: []
}
