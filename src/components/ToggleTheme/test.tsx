import { renderWithTheme } from 'styles/renderWithTheme'

import ToggleTheme from '.'

describe('<ToggleTheme />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<ToggleTheme />)

    expect(container).toMatchSnapshot()
  })
})
