import { Story, Meta } from '@storybook/react'
import BaseTemplate, { BaseTemplateProps } from '.'

import mock from './mock'

export default {
  title: 'Templates/BaseTemplate',
  component: BaseTemplate,
  args: mock
} as Meta

export const Default: Story<BaseTemplateProps> = (args) => (
  <BaseTemplate {...args} />
)
