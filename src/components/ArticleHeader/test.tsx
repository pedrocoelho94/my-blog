import { screen } from '@testing-library/react'
import { renderWithTheme } from 'styles/renderWithTheme'
import { formatDate } from 'utils/format-date'

import ArticleHeader, { ArticleHeaderProps } from '.'
import mock from './mock'

const props: ArticleHeaderProps = mock

describe('<ArticleHeader />', () => {
  it('should render heading, excerpt, cover img and meta', () => {
    const { container } = renderWithTheme(<ArticleHeader {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(screen.getByText(props.excerpt)).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: props.cover.alternativeText })
    ).toBeInTheDocument()

    expect(screen.getByText(formatDate(props.createdAt))).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })
})
