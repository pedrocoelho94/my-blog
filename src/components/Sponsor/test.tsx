import { screen } from '@testing-library/react'
import { renderWithTheme } from 'styles/renderWithTheme'

import Sponsor from '.'
import mock from './mock'

describe('<Sponsor />', () => {
  it('should render the correct link and image', () => {
    renderWithTheme(<Sponsor title={mock.title} sponsors={mock.sponsors} />)

    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      mock.sponsors[0].url
    )

    expect(
      screen.getByRole('img', { name: mock.sponsors[0].cover.alternativeText })
    ).toBeInTheDocument()
  })
})
