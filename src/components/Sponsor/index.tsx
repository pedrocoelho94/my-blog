import HeadingBar from 'components/HeadingBar'
import { StrapiImage } from 'shared-typed/cover'
import * as S from './styles'

export type SponsorsItems = {
  id: string
  cover: StrapiImage
  url: string
}

export type SponsorProps = {
  title?: string
  sponsors?: SponsorsItems[]
}

const Sponsor = ({ title = 'Parceiros', sponsors = [] }: SponsorProps) => (
  <S.Wrapper>
    <HeadingBar>{title}</HeadingBar>

    <S.Content>
      {sponsors?.map((item) => (
        <S.Link key={item.id} href={item.url} target="_blank">
          <S.ContainerImage>
            <S.Image src={item.cover.url} alt={item.cover.alternativeText} />
          </S.ContainerImage>
        </S.Link>
      ))}
    </S.Content>
  </S.Wrapper>
)

export default Sponsor
