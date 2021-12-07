import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import * as PostCardStyles from 'components/PostCard/styles'
import * as PostGridStyles from 'components/PostGrid/styles'

export const SectionContainer = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.medium};
    margin-top: 3rem;
    margin-bottom: ${theme.spacings.huge};

    ${media.lessThan('medium')`
      margin-top: 1.6rem;
      margin-bottom: ${theme.spacings.huge};
    `}
  `}
`

export const SectionPosts = styled.section`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 7fr 3fr;
    gap: ${theme.spacings.medium};

    /* ${PostCardStyles.Wrapper} {
      grid-template-columns: 1fr 1fr;
    }

    ${PostGridStyles.Grid} {
      width: 100%;
      grid-template-columns: 1fr;
    } */

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
    gap: ${theme.spacings.medium};
  `}
`
