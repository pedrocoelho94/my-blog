import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section``

export const Content = styled.div`
  ${({ theme }) => css`
    ${media.lessThan('huge')`
      overflow-x: hidden;
    `}

    .slick-track,
    .slick-list {
      display: flex;
    }

    .slick-slide > div {
      margin: 0 ${theme.spacings.xsmall};
      flex: 1 0 auto;
      height: 100%;
    }

    .slick-slide > div > div {
      height: 100%;
    }
    .slick-list {
      margin-left: -0.9rem;
      margin-right: -0.3rem;
    }

    ${media.greaterThan('large')`
      .slick-slide > div {
        margin: 0 ${theme.spacings.xsmall};
      }
      .slick-list {
        margin: 0 -${theme.spacings.xsmall};
      }
    `}
    .slick-prev,
    .slick-next {
      display: block;
      background: rgba(0, 0, 0, 0.5);
      color: ${theme.colors.white};
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: 3.5rem;
      height: 100%;
      padding: 0;
      transform: translate(0, -50%);
      transition: all 0.2s ease-in-out;
      z-index: 5;

      &:hover {
        background: rgba(0, 0, 0, 0.8);
      }
    }
    .slick-prev {
      left: 0;
    }
    .slick-next {
      right: 0;
    }
    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }
  `}
`

export const HeaderReview = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: ${theme.spacings.medium};
    border-bottom: 1px solid ${theme.colors.secondary};
  `}
`
export const HeaderTitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};

    ${media.lessThan('small')`
      font-size: 2rem
    `}
  `}
`

export const HeaderSeeMore = styled.p`
  ${({ theme }) => css`
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: ${theme.colors.secondary};
      text-transform: uppercase;
      font-size: 1.3rem;
      font-weight: bold;
      gap: 0.5rem;

      span {
        font-size: 1.9rem;
      }
    }
  `}
`
