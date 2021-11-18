import React, { createContext, useState, useEffect, useCallback } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

export type BlogThemeProviderProps = {
  children: React.ReactNode
}

export type BlogThemeContextValues = {
  theme: DefaultTheme
  setTheme?: (mode: 'default' | 'inverted') => void
}

export const BlogThemeContext = createContext<BlogThemeContextValues>({
  theme: theme
})

export const BlogThemeProvider = ({ children }: BlogThemeProviderProps) => {
  const [blogTheme, setBlogTheme] = useState(theme)

  useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    if (!localTheme) return

    const newTheme = JSON.parse(localTheme)
    setBlogTheme(newTheme)
  }, [])

  const handleSetTheme: BlogThemeContextValues['setTheme'] = useCallback(
    (mode = 'default') => {
      if (mode === 'default') {
        setBlogTheme(theme)
        localStorage.setItem('theme', JSON.stringify(theme))
      } else {
        const newTheme = {
          ...theme,
          name: 'inverted',
          colors: {
            primary: '#e7e7e7',
            darkText: '#e4e4e4',
            secondary: '#dc143c',
            white: '#272727',
            mediumGray: '#f9f9f9',
            darkerGray: '#cccccc',
            lightGray: '#242424'
          }
        }
        setBlogTheme(newTheme)
        localStorage.setItem('theme', JSON.stringify(newTheme))
      }
    },
    []
  )

  return (
    <BlogThemeContext.Provider
      value={{ theme: blogTheme, setTheme: handleSetTheme }}
    >
      <ThemeProvider theme={blogTheme}>{children}</ThemeProvider>
    </BlogThemeContext.Provider>
  )
}
