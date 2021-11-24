import { screen, fireEvent } from '@testing-library/react'
import { renderWithTheme } from 'styles/renderWithTheme'

import Menu, { MenuProps } from '.'
import mock from './mock'
const props: MenuProps = mock

describe('<Menu />', () => {
  it('should render full menu', () => {
    renderWithTheme(<Menu {...props} />)

    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByLabelText(/open or close menu/i)).toHaveStyleRule(
      'display',
      'none',
      { media: '(min-width: 768px)' }
    )
    expect(screen.getByLabelText(/search box/i)).toBeInTheDocument()
  })

  it('should open/close menu on button click', () => {
    renderWithTheme(<Menu {...props} />)

    // muda o viewport do jest
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 500
    })
    window.dispatchEvent(new Event('resize'))
    expect(window.innerWidth).toBe(500)

    const iconButton = screen.getByLabelText(/open or close menu/i)
    const menuMobile = screen.getByLabelText(/menu mobile/i)

    expect(iconButton).toHaveStyle({
      display: 'list-item'
    })

    expect(menuMobile.getAttribute('aria-hidden')).toBe('true')

    // Menu abre após o clique no icone do menu
    fireEvent.click(iconButton)
    expect(menuMobile.getAttribute('aria-hidden')).toBe('false')

    // Menu fecha após o clique no icone do menu
    fireEvent.click(iconButton)
    expect(menuMobile.getAttribute('aria-hidden')).toBe('true')
  })

  it('should match snapshot', () => {
    const { container } = renderWithTheme(<Menu {...props} />)
    expect(container).toMatchSnapshot()
  })
})
