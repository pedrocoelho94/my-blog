import { screen } from '@testing-library/react'
import { renderWithTheme } from 'styles/renderWithTheme'

import SectionContainer from '.'

describe('<SectionContainer />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <SectionContainer>
        <h1>Children</h1>
      </SectionContainer>
    )

    expect(screen.getByRole('heading')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
