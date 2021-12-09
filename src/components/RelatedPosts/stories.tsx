import { Story, Meta } from '@storybook/react'
import RelatedPosts, { RelatedPostsProps } from '.'

import mock from './mock'

export default {
  title: 'RelatedPosts',
  component: RelatedPosts,
  args: mock.posts
} as Meta

export const Default: Story<RelatedPostsProps> = (args) => (
  <RelatedPosts {...args} />
)
