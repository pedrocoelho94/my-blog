import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 2;
`
export const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 5rem;
  height: 2.5rem;
  line-height: 0;
  font-size: 0;
  overflow: hidden;
  color: rgba(0, 0, 0, 0);
`
export const Input = styled.input`
  ${({ theme }) => css`
    appearance: none;
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + ${Slider} {
      background: ${theme.colors.secondary};
      border: 1px solid ${theme.colors.secondary};
    }

    &:focus + ${Slider} {
      border: 1px solid ${theme.colors.secondary};
    }

    &:checked&:focus + ${Slider} {
      border: 1px solid ${theme.colors.primary};
    }

    &:checked + ${Slider}:before {
      transform: translateX(2rem);
      background: ${theme.colors.primary};
    }
  `}
`
export const Slider = styled.span`
  ${({ theme }) => css`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${theme.colors.darkerGray};
    transition: all 0.3s ease-in-out;
    border-radius: 2rem;
    border: 1px solid ${theme.colors.darkerGray};

    &:before {
      content: '';
      position: absolute;
      height: 1.9rem;
      width: 1.9rem;
      left: 0.4rem;
      bottom: 0.2rem;
      background: ${theme.colors.white};
      border-radius: 50%;
      transition: all 0.3s ease-in-out;
    }
  `}
`
