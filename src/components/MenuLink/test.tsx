import { screen } from '@testing-library/react'
import { renderWithTheme } from 'styles/renderWithTheme'

import MenuLink from '.'

describe('<MenuLink />', () => {
  it('should render a link', () => {
    renderWithTheme(<MenuLink link="http://localhost">Children</MenuLink>)

    expect(screen.getByRole('link', { name: /children/i })).toHaveAttribute(
      'target',
      '_self'
    )
  })

  it('should internal link', () => {
    renderWithTheme(<MenuLink link="/localhost">Children</MenuLink>)

    expect(screen.getByRole('link', { name: /children/i })).toHaveAttribute(
      'target',
      '_self'
    )
  })

  it('should render open in a new tab', () => {
    const { container } = renderWithTheme(
      <MenuLink link="http://localhost" newTab>
        Children
      </MenuLink>
    )

    expect(screen.getByRole('link', { name: /children/i })).toHaveAttribute(
      'target',
      '_blank'
    )

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: block;
        color: #FFFFFF;
        -webkit-text-decoration: none;
        text-decoration: none;
        font-size: 1.8rem;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
      }

      .c0:hover {
        color: #dc143c;
      }

      <a
        class="c0"
        href="http://localhost"
        target="_blank"
      >
        Children
      </a>
    `)
  })
})
