import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'
import BannerReview from 'components/BannerReview'
import { PostCardProps } from 'components/PostCard'
import Slider, { SliderSettings } from 'components/Slider'
import * as S from './styles'
import Link from 'next/link'

export type LatestReviewsProps = {
  posts: PostCardProps[]
}

const settings: SliderSettings = {
  arrows: true,
  slidesToShow: 6,
  slidesToScroll: 3,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        slidesToScroll: 3,
        slidesToShow: 5.2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToScroll: 2,
        slidesToShow: 4.2
      }
    },
    {
      breakpoint: 630,
      settings: {
        arrows: false,
        slidesToScroll: 1,
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 490,
      settings: {
        arrows: false,
        slidesToScroll: 1,
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: 290,
      settings: {
        arrows: false,
        slidesToScroll: 1,
        slidesToShow: 1.2
      }
    }
  ],
  nextArrow: <ArrowRight aria-label="next review" />,
  prevArrow: <ArrowLeft aria-label="previous review" />
}

const LatestReviewsSlider = ({ posts }: LatestReviewsProps) => (
  <S.Wrapper>
    <S.HeaderReview>
      <S.HeaderTitle>Últimas Análises</S.HeaderTitle>
      <S.HeaderSeeMore>
        <Link href="/category/reviews">
          <a>
            Ver Mais<span> +</span>
          </a>
        </Link>
      </S.HeaderSeeMore>
    </S.HeaderReview>

    <S.Content>
      <Slider settings={settings}>
        {posts.map((post, index) => (
          <BannerReview key={index} {...post} />
        ))}
      </Slider>
    </S.Content>
  </S.Wrapper>
)

export default LatestReviewsSlider
