import { screen } from '@testing-library/react'
import { renderWithTheme } from 'styles/renderWithTheme'

import ArticleMeta, { ArticleMetaProps } from '.'
import mock from './mock'

const props: ArticleMetaProps = mock

describe('<ArticleMeta />', () => {
  it('should render author and category links', () => {
    renderWithTheme(<ArticleMeta {...props} />)

    expect(screen.getByRole('link', { name: /pedro coelho/i })).toHaveAttribute(
      'href',
      `/author/pedro-coelho`
    )

    expect(screen.getByRole('link', { name: /tech/i })).toHaveAttribute(
      'href',
      `/category/tech`
    )

    expect(screen.getByRole('link', { name: /js/i })).toHaveAttribute(
      'href',
      `/category/javascript`
    )
  })

  it('should format date', () => {
    const { container } = renderWithTheme(<ArticleMeta {...props} />)

    expect(screen.getByText('2 de mar. de 2021')).toHaveAttribute(
      'datetime',
      props.createdAt
    )

    expect(container).toMatchSnapshot()
  })

  it('should match snapshot with no author and categories', () => {
    const { container } = renderWithTheme(
      <ArticleMeta {...props} author={undefined} categories={undefined} />
    )

    expect(container).toMatchSnapshot()
  })
})
