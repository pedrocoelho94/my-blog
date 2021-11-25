import '../../../.jest/match-media-mock'

import BannerSlider from '.'

import mock from './mock'
import { renderWithTheme } from 'styles/renderWithTheme'

describe('<BannerSlider />', () => {
  it('should render slider with 1 active item', () => {
    const { container } = renderWithTheme(<BannerSlider {...mock} />)

    expect(container.querySelector('.slick-active')).toBeInTheDocument()
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1)
  })
})
