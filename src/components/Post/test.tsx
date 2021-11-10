import { screen } from '@testing-library/react'
import { renderWithTheme } from 'styles/renderWithTheme'
import { formatDate } from 'utils/format-date'

import mock from './mock'
import Post, { PostsProps } from '.'

const props: PostsProps = mock

describe('<Post />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Post {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(screen.getByText(props.excerpt)).toHaveStyle({
      'font-size': '2.4rem'
    })

    expect(
      screen.getByRole('img', { name: props.cover.alternativeText })
    ).toBeInTheDocument()

    expect(screen.getByText(formatDate(props.createdAt))).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })
})
