import { Story, Meta } from '@storybook/react'
import AsidePosts, { AsidePostsProps } from '.'

export default {
  title: 'AsidePosts',
  component: AsidePosts,
  args: {
    title:
      'Eternos | Elenco fala sobre como confiança em Chloé Zhao permitiu que explorassem os personagens a fundo',
    cover:
      'https://res.cloudinary.com/rabbitz/image/upload/v1637872830/20211025_eternos_chloe_4d8e2e78a0.jpg',
    slug: 'slug-title'
  }
} as Meta

export const Default: Story<AsidePostsProps> = (args) => (
  <div style={{ maxWidth: '35rem' }}>
    <AsidePosts {...args} />
  </div>
)
