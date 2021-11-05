import { screen } from '@testing-library/react'
import { renderWithTheme } from 'styles/renderWithTheme'

import LogoLink from '.'

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderWithTheme(<LogoLink link="#target" text="Olá mundo" />)
    expect(
      screen.getByRole('heading', { name: 'Olá mundo' })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Olá mundo' })).toHaveAttribute(
      'href',
      '#target'
    )
  })

  it('should render image logo', () => {
    renderWithTheme(
      <LogoLink link="#target" text="Olá mundo" srcImg="image.jpg" />
    )
    expect(screen.getByAltText('Olá mundo')).toHaveAttribute('src', 'image.jpg')
  })

  it('should render internal link', () => {
    renderWithTheme(
      <LogoLink link="/target" text="Olá mundo" srcImg="image.jpg" />
    )
    expect(screen.getByAltText('Olá mundo')).toHaveAttribute('src', 'image.jpg')
  })

  it('should render a link with target _blank', () => {
    renderWithTheme(<LogoLink link="/target" text="Olá mundo" newTab={true} />)
    expect(
      screen.getByRole('heading', { name: 'Olá mundo' })
    ).toBeInTheDocument()
  })

  it('should render render internal link with text only', () => {
    renderWithTheme(<LogoLink link="/target" text="Olá mundo" />)
    expect(
      screen.getByRole('heading', { name: 'Olá mundo' })
    ).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = renderWithTheme(
      <LogoLink link="#target" text="Olá mundo" srcImg="image.jpg" />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
