import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;

  > img {
    height: 15rem;
    width: 15rem;
    border-radius: 50%;
  }

  ${media.lessThan('small')`
    > img {
      height: 10rem;
      width: 10rem;
    }
  `}
`
