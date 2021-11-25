import { Story, Meta } from '@storybook/react'
import Banner, { BannerProps } from '.'
import mock from './mock'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    title: mock.post.title,
    excerpt: mock.post.excerpt,
    slug: mock.post.slug,
    cover: mock.post.cover
  }
} as Meta

export const Default: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: '120rem', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
)
