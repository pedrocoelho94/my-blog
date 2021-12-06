import { Story, Meta } from '@storybook/react'
import LatestReviews, { LatestReviewsProps } from '.'

import mock from './mock'

export default {
  title: 'LatestReviews',
  component: LatestReviews,
  args: mock
} as Meta

export const Default: Story<LatestReviewsProps> = (args) => (
  <LatestReviews {...args} />
)
