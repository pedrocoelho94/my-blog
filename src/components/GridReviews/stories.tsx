import { Story, Meta } from '@storybook/react'
import GridReviews, { GridReviewsProps } from '.'
import mock from './mock'

export default {
  title: 'GridReviews',
  component: GridReviews,
  args: mock
} as Meta

export const Default: Story<GridReviewsProps> = (args) => (
  <GridReviews {...args} />
)
