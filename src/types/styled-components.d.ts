import theme from 'styles/theme'

// inferência de tipos
// define o defaultTheme a partir de theme
type Theme = typeof theme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
