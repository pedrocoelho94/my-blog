import { screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { renderWithTheme } from 'styles/renderWithTheme'
import theme from 'styles/theme'

import Heading from '.'

describe('<Heading />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Heading>texto</Heading>)

    const heading = screen.getByRole('heading', { name: 'texto' })

    expect(heading).toHaveStyle({
      color: theme.colors.primary
    })
  })

  it('should render with white color', () => {
    renderWithTheme(<Heading colorDark={false}>texto</Heading>)
    const heading = screen.getByRole('heading', { name: 'texto' })

    expect(heading).toHaveStyle({
      color: theme.colors.white
    })
  })

  it('should render correct heading sizes', () => {
    const { rerender } = renderWithTheme(<Heading size="small">texto</Heading>)
    const heading = screen.getByRole('heading', { name: 'texto' })

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.medium
    })

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="big">texto</Heading>
      </ThemeProvider>
    )

    expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyle({
      'font-size': theme.font.sizes.xlarge
    })

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="medium">texto</Heading>
      </ThemeProvider>
    )

    expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyle({
      'font-size': theme.font.sizes.large
    })

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="huge">texto</Heading>
      </ThemeProvider>
    )

    expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyle({
      'font-size': theme.font.sizes.huge
    })
  })

  it('should render with uppercase letters', () => {
    renderWithTheme(<Heading uppercase={true}>texto</Heading>)
    const heading = screen.getByRole('heading', { name: 'texto' })

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase'
    })
  })

  it('should render correct size when on mobile', () => {
    renderWithTheme(<Heading size="huge">texto</Heading>)
    screen.getByRole('heading', { name: 'texto' })

    expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyleRule(
      'font-size',
      theme.font.sizes.large,
      {
        media: '(max-width: 768px)'
      }
    )
  })
})
