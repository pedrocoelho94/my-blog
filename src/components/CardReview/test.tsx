import { screen } from '@testing-library/react'
import { renderWithTheme } from 'styles/renderWithTheme'

import CardReview from '.'

import mock from './mock'
const cover = mock.cover
const reviewDetails = mock.reviewDetails

describe('<CardReview />', () => {
  it('should render the heading', () => {
    renderWithTheme(<CardReview cover={cover} reviewDetails={reviewDetails} />)

    expect(
      screen.getByRole('heading', {
        name: `${reviewDetails.ptbrTitle} (${reviewDetails.yearRelease})`
      })
    ).toBeInTheDocument()
  })
})
