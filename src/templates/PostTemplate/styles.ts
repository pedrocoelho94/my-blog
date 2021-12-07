import { Container } from 'components/Container'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled(Container)`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: 70% 30%;
  gap: 4rem;

  ${media.lessThan('large')`
    grid-template-columns: 1fr;
  `}
`

type ReviewDetailsProps = {
  bgImage: string
}

export const Rating = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};
    font-size: 2.4rem;
    color: ${theme.colors.secondary};
  `}
`

export const ReviewContainer = styled.div`
  width: 100%;
  min-height: 40rem;
  border: 1px solid transparent;
  overflow: hidden;
  border-radius: 10px;
  position: relative;
`

export const ReviewDetails = styled.div<ReviewDetailsProps>`
  ${({ bgImage }) => css`
    background-image: url(${bgImage});
    background-position: center center;
    background-size: cover;
    width: 100%;
    height: 40rem;
    border-radius: 10px;
    filter: blur(20px);
    -webkit-filter: blur(20px);
  `}
`
export const ReviewContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 5rem;
  display: flex;
  gap: 5rem;
`

export const ReviewPoster = styled.img`
  height: 100%;
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
  `}
`
export const ReviewCast = styled.p``

export const Main = styled.div``

export const Aside = styled.aside`
  ${media.between('medium', 'large')`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10rem;
  `}
`

export const AsideTitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    margin: 0;
  `}
`

export const AsideContent = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.huge};
  `}
`
