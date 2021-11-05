import { screen } from '@testing-library/react'
import { renderWithTheme } from 'styles/renderWithTheme'

import TextComponent from '.'

describe('<TextComponent />', () => {
  it('should render the heading', () => {
    renderWithTheme(<TextComponent>Lorem ipsum</TextComponent>)

    expect(screen.getByText('Lorem ipsum')).toBeInTheDocument()
  })
})
