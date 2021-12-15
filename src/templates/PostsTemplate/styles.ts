import { Container } from 'components/Container'
import styled, { css } from 'styled-components'
import media, { generateMedia } from 'styled-media-query'
import * as PostCardStyles from 'components/PostCard/styles'
import * as PostGridStyles from 'components/PostGrid/styles'

const customMedia = generateMedia({
  smallMedium: '610px'
})

export const Wrapper = styled.div``

export const PostsContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  /* ${PostCardStyles.Wrapper} {
    grid-template-columns: 1fr;
  }

  ${PostGridStyles.Grid} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  ${media.lessThan('large')`
    ${PostGridStyles.Grid} {
      grid-template-columns: 1fr 1fr;
    }
  `}

  ${customMedia.lessThan('smallMedium')`
    ${PostGridStyles.Grid} {
      grid-template-columns: 1fr;
    }
  `} */
`

export const TitleCategory = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
  `}
`

export const Title = styled(Container)`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 3rem;
    padding-top: ${theme.spacings.medium};
    padding-bottom: ${theme.spacings.medium};
    margin-bottom: ${theme.spacings.medium};
  `}
`

export const SearchTerm = styled(Title)`
  ${({ theme }) => css`
    color: ${theme.colors.darkText};
    font-size: 1.8rem;
  `}
`

export const HighlightText = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
  `}
`

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.large};
    margin: ${theme.spacings.large} 0;
    display: flex;
    justify-content: center;
  `}
`

export const Button = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: none;
    padding: ${theme.spacings.small} ${theme.spacings.large};
    border-radius: 5px;
    cursor: pointer;

    &:disabled {
      background: ${theme.colors.darkerGray};
      cursor: initial;
    }
  `}
`
