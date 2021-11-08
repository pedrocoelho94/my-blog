import Link from 'next/link'
import * as S from './styles'

export type MenuLinkProps = {
  children: React.ReactNode
  link: string
  newTab?: boolean
}

const MenuLink = ({ children, newTab = false, link }: MenuLinkProps) => {
  const target = newTab ? '_blank' : '_self'
  const nextLink = link.match(/^\//) ? true : false

  if (nextLink) {
    return (
      <Link href={link} passHref>
        <S.Container target={target}>{children}</S.Container>
      </Link>
    )
  }

  return (
    <S.Container href={link} target={target}>
      {children}
    </S.Container>
  )
}

export default MenuLink
