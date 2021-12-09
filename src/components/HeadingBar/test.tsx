import { renderWithTheme } from 'styles/renderWithTheme'
import { ListAlt } from '@styled-icons/material-outlined/ListAlt'

import HeadingBar from '.'

const mock = {
  children: 'oba',
  icon: <ListAlt />
}

describe('<HeadingBar />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <HeadingBar icon={mock.icon}>{mock.children}</HeadingBar>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
