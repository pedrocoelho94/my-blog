import { screen } from '@testing-library/react'
import { renderWithTheme } from 'styles/renderWithTheme'

import GridReviews from '.'
import mock from './mock'

describe('<GridReviews />', () => {
  it('should render the heading', () => {
    renderWithTheme(<GridReviews {...mock} />)

    expect(screen.getAllByLabelText('posters')).toHaveLength(3)
  })
})
