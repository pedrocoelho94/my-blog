import { screen, fireEvent } from '@testing-library/react'
import { renderWithTheme } from 'styles/renderWithTheme'

import Menu, { MenuProps } from '.'
import mock from './mock'
const props: MenuProps = mock

describe('<Menu />', () => {
  it('should render button link', () => {
    renderWithTheme(<Menu {...props} links={[]} />)

    expect(
      screen.getByRole('link', { name: /Open or close menu/i })
    ).toBeInTheDocument()
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()

    expect(screen.queryByLabelText('Close menu')).not.toBeInTheDocument()
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
  })

  it('should open/close menu on button click', () => {
    renderWithTheme(<Menu {...props} />)

    const buttonLink = screen.getByRole('link', { name: /Open or close menu/i })

    fireEvent.click(buttonLink)

    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()
    expect(screen.queryByLabelText('Open menu')).not.toBeInTheDocument()

    expect(screen.getByRole('navigation')).toBeInTheDocument()

    fireEvent.click(buttonLink)

    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
    expect(screen.queryByLabelText('Close menu')).not.toBeInTheDocument()
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = renderWithTheme(<Menu {...props} />)

    expect(container).toMatchSnapshot()
  })
})
