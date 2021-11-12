import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;

  ${media.lessThan('large')`
    grid-template-columns: 1fr;
  `}
`
