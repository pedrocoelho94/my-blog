import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Poster = styled.div`
  position: relative;
  width: 100%;
  max-width: 25rem;
  height: 100%;
  max-height: 35rem;
  transition: all 0.2s ease-in-out;
  overflow: hidden;
  border-radius: 5px;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  transform: scale(1.05);

  &:hover {
    transform: scale(1.1);
  }
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
    bottom: 0;
    right: 0;
    z-index: 5;
    color: ${theme.colors.white};
    font-size: 1.8rem;
    font-weight: bold;
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    border-radius: 5px;

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
