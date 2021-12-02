import { screen } from '@testing-library/react'
import { renderWithTheme } from 'styles/renderWithTheme'

import Banner from '.'

const props = {
  title: 'Title',
  excerpt: 'Excerpt',
  slug: 'slug',
  cover: {
    id: '123123',
    alternativeText: 'Alternative text',
    url: 'image.jpg'
  },
  categories: [
    {
      id: 'sdfiosdjf',
      displayName: 'cat',
      slug: 'cat-slug'
    }
  ]
}

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Banner {...props} />)

    expect(screen.getByRole('heading', { name: /title/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /excerpt/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /title/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
