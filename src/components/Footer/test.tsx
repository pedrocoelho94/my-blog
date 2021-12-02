import { screen } from '@testing-library/react'
import { renderWithTheme } from 'styles/renderWithTheme'

import Footer from '.'

describe('<Footer />', () => {
  it('should render the footer', () => {
    const { container } = renderWithTheme(
      <Footer footerHtml="<h1>Hello</h1>" />
    )

    expect(screen.getByRole('heading', { name: 'Hello' })).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })
})
