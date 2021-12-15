import styled from 'styled-components'
import media, { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  mediumMedium: '568px',
  smallMedium: '300px'
})

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 100%;

  ${customMedia.greaterThan('smallMedium')`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${customMedia.greaterThan('mediumMedium')`
    grid-template-columns: repeat(4, 1fr);
  `}

  ${media.greaterThan('large')`
    grid-template-columns: repeat(5, 1fr);
  `}
`
