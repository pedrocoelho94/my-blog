// import { ThemeProvider } from 'styled-components'
// import { render, RenderResult } from '@testing-library/react'

// import theme from 'styles/theme'

// export const renderWithTheme = (children: React.ReactNode): RenderResult =>
//   render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)

import { render, RenderResult } from '@testing-library/react'
import { BlogThemeProvider } from 'context/BlogThemeContext'

export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(<BlogThemeProvider>{children}</BlogThemeProvider>)
