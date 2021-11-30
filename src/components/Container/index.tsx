import styled, { css } from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  smallMedium: '968px'
})

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin-left: auto;
    margin-right: auto;
    padding-left: calc(${theme.grid.gutter} / 2);
    padding-right: calc(${theme.grid.gutter} / 2);

    ${customMedia.greaterThan('smallMedium')`
      padding-left: calc(${theme.grid.gutter} * 2);
      padding-right: calc(${theme.grid.gutter} * 2);
    `}
  `}
`
