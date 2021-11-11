import { screen } from '@testing-library/react'
import { renderWithTheme } from 'styles/renderWithTheme'

import PostCard, { PostCardProps } from '.'
import mock from './mock'

const props: PostCardProps = mock.posts[0]

describe('<PostCard />', () => {
  it('should render a heading, cover and excerpt', () => {
    renderWithTheme(<PostCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: props.cover.alternativeText })
    ).toBeInTheDocument()

    expect(screen.getByText(props.excerpt)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: props.title })).toBeInTheDocument()
  })
})
