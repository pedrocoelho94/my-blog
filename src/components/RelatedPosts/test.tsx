import { screen } from '@testing-library/react'
import { renderWithTheme } from 'styles/renderWithTheme'

import RelatedPosts from '.'

import mock from './mock'

describe('<BannerRelatedPosts />', () => {
  it('should render related posts', () => {
    renderWithTheme(<RelatedPosts {...mock} />)

    expect(screen.getAllByLabelText('related')).toHaveLength(3)
  })
})
