import '../../../.jest/match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'styles/renderWithTheme'

import LatestReviewsSlider from '.'

import mock from './mock'

describe('<LatestReviews />', () => {
  it('should render the slider with 6 active items', () => {
    const { container } = renderWithTheme(<LatestReviewsSlider {...mock} />)

    expect(container.querySelectorAll('.slick-active')).toHaveLength(6)
  })

  it('should render the arrows slider', () => {
    renderWithTheme(<LatestReviewsSlider {...mock} />)

    expect(screen.getByLabelText(/previous review/i)).toHaveStyle({
      color: '#FAFAFA'
    })
    expect(screen.getByLabelText(/next review/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
