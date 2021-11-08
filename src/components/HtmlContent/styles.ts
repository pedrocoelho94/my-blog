import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    line-height: 1.4;

    p {
      margin: ${theme.spacings.xlarge} 0;
    }

    a,
    a:visited,
    a:link {
      color: ${theme.colors.secondary};
      text-decoration: none;
      transition: all 0.2s ease-in-out;
    }

    a:hover {
      filter: brightness(0.8);
    }

    pre {
      background: ${theme.colors.primary};
      padding: ${theme.spacings.medium};
      font-family: monospace;
      color: ${theme.colors.white};
      margin: ${theme.spacings.xlarge} 0;
      width: 100%;
      overflow-x: auto;
      font-size: ${theme.font.sizes.small};
    }

    hr {
      border: none;
      border-bottom: 0.1rem solid ${theme.colors.mediumGray};
    }

    img {
      max-width: 100%;
    }

    .image {
      background: ${theme.colors.mediumGray};
      line-height: 0;
      margin: ${theme.spacings.xlarge} 0;
    }

    .image figcaption {
      font-size: ${theme.font.sizes.small};
      padding: ${theme.font.sizes.xsmall};
      text-align: center;
      line-height: 1.3;
    }

    ${media.greaterThan('medium')`
    .image-style-side {
      float: right;
      max-width: 50%;
      margin: ${theme.spacings.medium};
    }
    `}

    ${media.lessThan('medium')`
      font-size: 2rem
    `}

    ul, ol {
      margin: ${theme.spacings.xlarge};
    }

    .table {
      width: 100%;
      overflow: hidden;
      overflow-x: auto;
    }

    table {
      width: 100%;
      border-collapse: collapse;
    }

    table td,
    table th {
      padding: ${theme.spacings.small};
      border: 0.1rem solid ${theme.colors.mediumGray};
    }
  `}
`
