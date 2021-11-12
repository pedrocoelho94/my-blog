import { Story, Meta } from '@storybook/react'
import ArticleHeader, { ArticleHeaderProps } from '.'

import mock from './mock'

export default {
  title: 'Posts/ArticleHeader',
  component: ArticleHeader,
  args: mock
} as Meta

export const Default: Story<ArticleHeaderProps> = (args) => (
  <div>
    <ArticleHeader {...args} />
  </div>
)
