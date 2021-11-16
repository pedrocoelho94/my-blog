import styled, { css } from 'styled-components'
import * as HeadingStyles from 'components/Heading/styles'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    padding-bottom: ${theme.spacings.xlarge};
    margin-bottom: ${theme.spacings.xlarge};
    border-bottom: 0.1rem solid ${theme.colors.mediumGray};

    ${HeadingStyles.Title} {
      margin: 0;
      margin-bottom: ${theme.spacings.medium};
      font-size: ${theme.font.sizes.large};
    }
  `}
`

export const Excerpt = styled.p`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0;
    font-size: calc(${theme.font.sizes.medium} * 0.9);
  `}
`

export const Cover = styled.img`
  ${({ theme }) => css`
    max-width: 100%;
    display: block;
    margin-bottom: ${theme.spacings.medium};
  `}
`
