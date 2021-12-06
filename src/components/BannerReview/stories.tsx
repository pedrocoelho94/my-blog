import { Story, Meta } from '@storybook/react'
import BannerReview, { BannerReviewProps } from '.'

import mock from './mock'

export default {
  title: 'BannerReview',
  component: BannerReview,
  args: mock
} as Meta

export const Default: Story<BannerReviewProps> = (args) => (
  <BannerReview {...args} />
)
