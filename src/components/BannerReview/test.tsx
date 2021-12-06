import { screen } from '@testing-library/react'
import { renderWithTheme } from 'styles/renderWithTheme'

import BannerReview from '.'

import mock from './mock'

describe('<BannerReview />', () => {
  it('should render correctly', () => {
    renderWithTheme(<BannerReview {...mock} />)

    expect(
      screen.getByRole('img', {
        name: mock.reviewDetails.poster.alternativeText
      })
    ).toBeInTheDocument()

    expect(screen.getByText(mock.reviewDetails.rating)).toBeInTheDocument()
  })
})
