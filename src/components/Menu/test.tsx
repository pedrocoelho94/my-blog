import { screen, fireEvent } from '@testing-library/react'
import { SessionProvider } from 'next-auth/react'
import { renderWithTheme } from 'styles/renderWithTheme'

import Menu, { MenuProps } from '.'
import mock from './mock'
const props: MenuProps = mock

const sessionProps = {
  expires: '1',
  user: { email: 'a', name: 'Delta', image: 'c' }
}

describe('<Menu />', () => {
  it('should render full menu', () => {
    renderWithTheme(
      <SessionProvider session={sessionProps}>
        <Menu {...props} />
      </SessionProvider>
    )

    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByLabelText(/open or close menu/i)).toHaveStyleRule(
      'display',
      'none',
      { media: '(min-width: 768px)' }
    )
    expect(screen.getAllByLabelText(/search box/i)).toHaveLength(2)

    expect(screen.getByLabelText('navbar')).toHaveStyle({
      height: '8rem'
    })
  })

  it('should open/close menu on button click', () => {
    renderWithTheme(
      <SessionProvider session={sessionProps}>
        <Menu {...props} />
      </SessionProvider>
    )

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
})
