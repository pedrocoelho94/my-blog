import { screen } from '@testing-library/react'
import { renderWithTheme } from 'styles/renderWithTheme'

import GoTop from '.'

describe('<GoTop />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<GoTop />)

    expect(screen.getByRole('link', { name: 'Go to top' })).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Go to top' })).toHaveAttribute(
      'href',
      '#'
    )

    expect(container).toMatchSnapshot()
  })
})
