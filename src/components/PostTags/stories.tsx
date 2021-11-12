import { Story, Meta } from '@storybook/react'
import PostTags, { PostTagsProps } from '.'

import mock from './mock'

export default {
  title: 'PostTags',
  component: PostTags,
  args: mock
} as Meta

export const Default: Story<PostTagsProps> = (args) => (
  <div>
    <PostTags {...args} />
  </div>
)

export const WithoutTags: Story<PostTagsProps> = (args) => (
  <div>
    <PostTags {...args} tags={[]} />
  </div>
)
