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
            secondary: '#dc143c',
            darker: '#4d4d4d',
            darkText: '#333333',
            white: '#FAFAFA',
            mediumGray: '#DDDDDD',
            darkerGray: '#AAAAAA',
            lightGray: '#F7F7F7',
            warning: 'rgb(247, 38, 115)',
            success: 'rgb(172, 243, 157)',
            info: 'rgb(85, 193, 255)',
            deepWhite: 'rgb(255, 255, 255)',
            gray0: 'rgb(245, 245, 253)',
            gray1: 'rgb(241, 241, 243)',
            gray2: 'rgb(221, 221, 223)',
            gray3: 'rgb(201, 201, 203)',
            gray4: 'rgb(181, 181, 184)',
            gray5: 'rgb(161, 161, 164)',
            gray6: 'rgb(141, 141, 144)',
            gray7: 'rgb(121, 121, 124)',
            gray8: 'rgb(101, 101, 104)',
            gray9: 'rgb(81, 81, 84)',
            gray10: 'rgb(61, 61, 64)',
            gray11: 'rgb(41, 41, 44)',
            gray12: 'rgb(21, 21, 24)',
            deepBlack: 'rgb(0, 0, 0)'
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
