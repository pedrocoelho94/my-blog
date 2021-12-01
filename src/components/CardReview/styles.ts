import styled, { css } from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  smallMedium: '600px'
})

export const Wrapper = styled.div`
  width: 100%;
  min-height: 40rem;
  border: 1px solid transparent;
  overflow: hidden;
  border-radius: 10px;
  position: relative;
`

type ReviewDetailsProps = {
  bgImage: string
}

export const ReviewDetails = styled.div<ReviewDetailsProps>`
  ${({ bgImage }) => css`
    position: absolute;
    background-image: url(${bgImage});
    background-position: center center;
    background-size: cover;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    filter: blur(15px) brightness(0.4);
    -webkit-filter: blur(15px) brightness(0.4);
    transform: scale(1.1);
  `}
`
export const ReviewContent = styled.div`
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 5rem;
  display: grid;
  grid-template-columns: 20rem auto;
  gap: 5rem;

  ${customMedia.lessThan('smallMedium')`
      grid-template-columns: 1fr;
    `}
`

export const ReviewPoster = styled.img`
  max-width: 210px;
  -webkit-box-shadow: 0px 0px 15px 3px #3a3a3a;
  box-shadow: 0px 0px 15px 3px #3a3a3a;

  ${customMedia.lessThan('smallMedium')`
      justify-self: center;
    `}
`
export const ReviewInfo = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`

export const ReviewTitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.xsmall};
    font-size: 2.6rem;
  `}
`
export const ReviewOriginalTitle = styled.p`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.large};
  `}
`
export const ReviewSinopse = styled.p`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.large};
    font-weight: 200;
    font-size: 1.4rem;
  `}
`
export const ReviewCast = styled.p`
  font-size: 1.4rem;

  span {
    font-weight: bold;
  }
`
