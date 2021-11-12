import { renderWithTheme } from 'styles/renderWithTheme'

import PostTemplate, { PostTemplateProps } from '.'
import mock from './mock'

const props: PostTemplateProps = mock

describe('<PostTemplate />', () => {
  it('should render the heading', () => {
    renderWithTheme(<PostTemplate {...props} />)
  })
})
