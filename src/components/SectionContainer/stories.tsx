import { Story, Meta } from '@storybook/react'
import SectionContainer, { SectionContainerProps } from '.'

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
          doloribus debitis minima nam beatae alias eius, mollitia asperiores
          animi dolorem esse, aperiam nesciunt praesentium. Labore vel optio
          quaerat aspernatur expedita!
        </p>
      </div>
    )
  },
  argTypes: {
    children: { type: '' }
  }
} as Meta

export const Default: Story<SectionContainerProps> = (args) => (
  <div>
    <SectionContainer {...args} />
  </div>
)
