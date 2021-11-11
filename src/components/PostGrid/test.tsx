import { screen } from '@testing-library/react'
import { renderWithTheme } from 'styles/renderWithTheme'

import PostGrid, { PostGridProps } from '.'
import mock from './mock'

const props: PostGridProps = mock

describe('<PostGrid />', () => {
  it('should render the heading', () => {
    renderWithTheme(<PostGrid {...props} posts={[]} />)

    expect(screen.getByText(/Nenhum post/i)).toBeInTheDocument()
  })

  it('should render two posts', () => {
    const { container } = renderWithTheme(<PostGrid {...props} />)

    expect(screen.queryByText(/Nenhum post/i)).not.toBeInTheDocument()

    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(screen.getAllByRole('img')).toHaveLength(2)
    expect(container.querySelectorAll('p')).toHaveLength(2)

    expect(container).toMatchSnapshot()
  })
})
