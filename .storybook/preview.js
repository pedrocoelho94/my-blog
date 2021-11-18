import { RouterContext } from 'next/dist/shared/lib/router-context'
import { BlogThemeProvider } from '../src/context/BlogThemeContext'
import GlobalStyles from '../src/styles/global'
import theme from 'styles/theme'

export const parameters = {
  layout: 'fullscreen',
  nextRouter: {
    Provider: RouterContext.Provider
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: theme.colors.white
      },
      {
        name: 'dark',
        value: theme.colors.primary
      }
    ]
  }
}

export const decorators = [
  (Story) => (
    <BlogThemeProvider>
      <GlobalStyles />
      <Story />
    </BlogThemeProvider>
  )
]
