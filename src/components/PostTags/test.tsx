import { screen } from '@testing-library/react'
import { renderWithTheme } from 'styles/renderWithTheme'

import PostTags, { PostTagsProps } from '.'
import mock from './mock'

const props: PostTagsProps = mock

describe('<PostTags />', () => {
  it('should render two tags', () => {
    const { container } = renderWithTheme(<PostTags {...props} />)

    expect(screen.getAllByRole('link')).toHaveLength(2)

    expect(container).toMatchSnapshot()
  })

  it('should match snapshot with no tags', () => {
    const { container } = renderWithTheme(<PostTags {...props} tags={[]} />)

    expect(container).toMatchSnapshot()
  })
})
