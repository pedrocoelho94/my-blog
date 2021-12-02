import Banner from 'components/Banner'
import { PostCardProps } from 'components/PostCard'
import Slider, { SliderSettings } from 'components/Slider'
import * as S from './styles'

export type BannerSliderProps = {
  posts: PostCardProps[]
}

const settings: SliderSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 10000,
  pauseOnHover: true
}

const BannerSlider = ({ posts }: BannerSliderProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {posts.map((post) => (
        <Banner key={post.id} {...post} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default BannerSlider
