import { Story, Meta } from '@storybook/react'
import CardReview, { CardReviewProps } from '.'

import mock from './mock'

export default {
  title: 'CardReview',
  component: CardReview,
  args: mock
} as Meta

export const Default: Story<CardReviewProps> = (args) => (
  <div style={{ maxWidth: '80rem', margin: '5rem auto' }}>
    <CardReview {...args} />
  </div>
)
