import { screen, fireEvent } from '@testing-library/react'
import { renderWithTheme } from 'styles/renderWithTheme'
import theme from 'styles/theme'

import ToggleTheme from '.'

describe('<ToggleTheme />', () => {
  beforeEach(() => {
    localStorage.setItem(
      'theme',
      JSON.stringify({ ...theme, name: 'inverted' })
    )
  })

  afterEach(() => {
    localStorage.removeItem('theme')
  })

  it('should render input without theme', () => {
    localStorage.removeItem('theme')
    renderWithTheme(<ToggleTheme />)

    expect(screen.getByRole('checkbox')).not.toBeChecked()
  })

  it('should render input with default theme', () => {
    localStorage.setItem('theme', JSON.stringify({ ...theme, name: 'default' }))
    renderWithTheme(<ToggleTheme />)

    expect(screen.getByRole('checkbox')).not.toBeChecked()
  })

  it('should render input checked with inverted theme', () => {
    renderWithTheme(<ToggleTheme />)

    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('should render input and toggle between theme when toggling input', () => {
    const { container } = renderWithTheme(<ToggleTheme />)

    const label = screen.getByLabelText(/toggle light and dark modes/i)
    const input = screen.getByRole('checkbox')

    fireEvent.click(label)
    expect(input).not.toBeChecked()

    fireEvent.click(label)
    expect(input).toBeChecked()

    expect(container).toMatchSnapshot()
  })
})
