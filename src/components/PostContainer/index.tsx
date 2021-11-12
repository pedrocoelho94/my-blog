import styled, { css, DefaultTheme } from 'styled-components'

export type PostContainerProps = {
  size: 'max' | 'content'
}

const PostContainerModifier = {
  max: (theme: DefaultTheme) => css`
    max-width: ${theme.sizes.max};
  `,
  content: (theme: DefaultTheme) => css`
    max-width: ${theme.sizes.content};
  `
}

export const PostContainer = styled.div<PostContainerProps>`
  ${({ theme, size }) => css`
    width: 100%;
    margin: 0 auto;
    ${PostContainerModifier[size](theme)}
  `}
`
