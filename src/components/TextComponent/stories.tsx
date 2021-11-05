import { Story, Meta } from '@storybook/react'
import TextComponent, { TextComponentProps } from '.'

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Ullam placeat unde harum. Facilis, quasi delectus
    obcaecati perferendis nobis alias ad aspernatur quod neque,
    corporis, aperiam numquam. Sint consequatur omnis voluptate.`
  },
  argTypes: {
    children: { type: 'string' }
  }
} as Meta

export const Default: Story<TextComponentProps> = (args) => (
  <div>
    <TextComponent {...args} />
  </div>
)
