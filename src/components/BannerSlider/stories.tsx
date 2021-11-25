import { Story, Meta } from '@storybook/react'
import BannerSlider, { BannerSliderProps } from '.'
import mock from './mock'

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  args: mock
} as Meta

export const Default: Story<BannerSliderProps> = (args) => (
  <BannerSlider {...args} />
)
