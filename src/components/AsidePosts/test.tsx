import { screen } from '@testing-library/react'
import { renderWithTheme } from 'styles/renderWithTheme'

import AsidePosts from '.'

const mock = {
  title: 'title',
  cover:
    'https://res.cloudinary.com/rabbitz/image/upload/v1637872830/20211025_eternos_chloe_4d8e2e78a0.jpg',
  slug: 'slug-title'
}

describe('<AsidePosts />', () => {
  it('should render the heading and image correctly', () => {
    const { container } = renderWithTheme(<AsidePosts {...mock} />)

    expect(screen.getByRole('heading', { name: /title/i })).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /title/i })).toHaveStyle({
      width: '10rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })
})
