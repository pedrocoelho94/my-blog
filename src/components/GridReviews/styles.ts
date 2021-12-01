import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, max-content);
  gap: 3rem;
`
export const Poster = styled.div`
  position: relative;
  width: 180px;
  height: 267px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

type RatingProps = {
  rating: number
}

const RatingModifiers = {
  good: () => `
    background-color: #01d200;
  `,
  ok: () => `
    background-color: #ffb300;
  `,
  bad: () => `
    background-color: #ff7e00;
  `,
  terrible: () => `
    background-color: #df0700;
  `
}

export const Rating = styled.div<RatingProps>`
  ${({ theme, rating }) => css`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 9999;
    color: ${theme.colors.white};
    font-size: 1.8rem;
    font-weight: bold;
    width: 3.5rem;
    height: 3.5rem;
    display: flex;

    span {
      width: 100%;
      text-align: center;
      justify-self: center;
      align-self: center;
    }

    ${rating >= 7.5 && RatingModifiers.good()}
    ${rating >= 5 && rating < 7.5 && RatingModifiers.ok()}
    ${rating >= 2.5 && rating < 5 && RatingModifiers.bad()}
    ${rating < 2.5 && RatingModifiers.terrible()}
  `}
`
