import styled, { css } from 'styled-components'
import * as LogoLinkStyles from 'components/LogoLink/styles'
import * as HeadingStyles from 'components/Heading/styles'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: ${theme.spacings.xhuge};
    width: 100%;
    max-width: ${theme.sizes.max};
    color: ${theme.colors.darkText};
    font-size: ${theme.font.sizes.small};
    margin: 0 auto;
    gap: 3rem;

    ${HeadingStyles.Title} {
      margin: 0 0 calc(${theme.spacings.small} - 1rem);
    }

    ${LogoLinkStyles.Container} {
      > img {
        border-radius: 50%;
      }
    }
  `}
`
export const Description = styled.p``

export const Content = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-self: center;
  max-width: 48rem;
`
