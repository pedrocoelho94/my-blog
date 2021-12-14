import { screen } from '@testing-library/react'
import { renderWithTheme } from 'styles/renderWithTheme'

import GoTop from '.'

describe('<GoTop />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<GoTop />)

    expect(screen.getByLabelText('Go to top')).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })
})
