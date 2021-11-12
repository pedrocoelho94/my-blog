import { renderWithTheme } from 'styles/renderWithTheme'

import PostsTemplate, { PostsTemplateProps } from '.'
import mock from './mock'

const props: PostsTemplateProps = mock

describe('<PostsTemplate />', () => {
  it('should match snapshot', () => {
    const { container } = renderWithTheme(<PostsTemplate {...props} />)

    expect(container).toMatchSnapshot()
  })

  it('should match snapshot without posts', () => {
    const { container } = renderWithTheme(
      <PostsTemplate {...props} posts={[]} />
    )

    expect(container).toMatchSnapshot()
  })
})
