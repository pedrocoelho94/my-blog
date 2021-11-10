import { Story, Meta } from '@storybook/react'
import ArticleHeader, { ArticleHeaderProps } from '.'

import mock from './mock'

export default {
  title: 'Posts/ArticleHeader',
  component: ArticleHeader,
  args: mock
} as Meta

export const Default: Story<ArticleHeaderProps> = (args) => (
  <div>
    <ArticleHeader {...args} />

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ea
      tempore doloribus laboriosam tenetur aperiam dolorum rem repudiandae
      adearum. Praesentium quae totam nobis aliquid cum modi eos est doloremque.
    </p>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
      excepturi modi sint odit laudantium illum inventore aliquam consequuntur
      illo dolor, debitis provident adipisci, culpa vero nisi saepe tempora
      veritatis? Mollitia. Lorem ipsum, dolor sit amet consectetur adipisicing
      elit. Dolorem, dignissimos. Dicta ea cumque sunt, animi deleniti
      blanditiis numquam consequatur dolores saepe illum neque ipsam explicabo
      maxime, labore at provident officiis.
    </p>
  </div>
)
