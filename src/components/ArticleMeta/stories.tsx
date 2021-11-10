import { Story, Meta } from '@storybook/react'
import ArticleMeta, { ArticleMetaProps } from '.'

import mock from './mock'

export default {
  title: 'Posts/ArticleMeta',
  component: ArticleMeta,
  args: mock,
  argTypes: {
    createdAt: {
      control: {
        type: 'date'
      }
    },
    author: { type: null },
    categories: { type: null }
  }
} as Meta

export const Default: Story<ArticleMetaProps> = (args) => (
  <div>
    <ArticleMeta {...args} />
  </div>
)
