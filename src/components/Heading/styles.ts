/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { HeadingProps } from '.'

const titleSize = {
  small: (theme: DefaultTheme) => css`
    font-size: calc(${theme.font.sizes.medium} * 0.75);
  `,
  medium: (theme: DefaultTheme) =>
    css`
      font-size: ${theme.font.sizes.large};
    `,
  big: (theme: DefaultTheme) =>
    css`
      font-size: ${theme.font.sizes.xlarge};
    `,
  huge: (theme: DefaultTheme) =>
    css`
      font-size: ${theme.font.sizes.huge};
    `
}

const titleCase = (uppercase: boolean) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`

export const Title = styled.h1<HeadingProps>`
  ${({ theme, colorDark, size, uppercase }) => css`
    color: ${colorDark ? theme.colors.primary : theme.colors.white};
    line-height: 1.2;

    ${titleSize[size!](theme)}
    ${titleCase(uppercase!)}

    ${media.lessThan('medium')`
      font-size: calc(${theme.font.sizes.small} * 1.2)
    `}
  `}
`
