import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const SectionContainer = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.medium};
    margin: ${theme.spacings.medium} 0; ;
  `}
`

export const SectionPosts = styled.section`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 7fr 3fr;
    gap: ${theme.spacings.medium};

    ${media.lessThan('medium')`
      grid-template-columns: 1fr;
    `}
  `}
`

export const PostsTitle = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xsmall};
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
    font-weight: bold;
    padding: ${theme.spacings.xsmall};
  `}
`

export const PostsContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.large};
  `}
`
