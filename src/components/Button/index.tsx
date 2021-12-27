import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

export type ButtonProps = {
  children: React.ReactNode
  disabled?: boolean
  onClick?: () => void
  icon?: React.ReactNode
  color?: 'primary' | 'secondary'
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  children,
  disabled = false,
  onClick,
  icon,
  color = 'secondary'
}: ButtonProps) => {
  const handleClick = () => {
    if (onClick) onClick()
  }

  return (
    <S.Button disabled={disabled} onClick={handleClick} color={color}>
      {children} {!!icon && icon}
    </S.Button>
  )
}
export default Button
