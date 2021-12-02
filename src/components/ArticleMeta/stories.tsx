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
    }
  }
} as Meta

export const Default: Story<ArticleMetaProps> = (args) => (
  <div>
    <ArticleMeta {...args} />
  </div>
)

export const NoAuthor: Story<ArticleMetaProps> = (args) => (
  <div>
    <ArticleMeta {...args} author={undefined} />
  </div>
)

export const NoCategories: Story<ArticleMetaProps> = (args) => (
  <div>
    <ArticleMeta {...args} categories={undefined} />
  </div>
)

export const NoAuthorNoCategories: Story<ArticleMetaProps> = (args) => (
  <div>
    <ArticleMeta {...args} author={undefined} categories={undefined} />
  </div>
)
