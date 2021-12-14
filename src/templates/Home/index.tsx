import BaseTemplate from 'templates/Base'
import BannerSlider from 'components/BannerSlider'
import PostsTemplate from 'templates/PostsTemplate'
import LatestReviewsSlider from 'components/LatestReviewsSlider'

import { ListAlt } from '@styled-icons/material-outlined/ListAlt'
import * as S from './styles'

import { StrapiPostAndSettings } from 'api/loadPosts'
import Sponsor, { SponsorProps } from 'components/Sponsor'
import { Container } from 'components/Container'
import HeadingBar from 'components/HeadingBar'

export type HomeTemplateProps = {
  sponsors?: SponsorProps
} & StrapiPostAndSettings

const HomePage = ({
  setting,
  posts,
  postsReviews = [],
  variables,
  sponsors = {}
}: HomeTemplateProps) => {
  return (
    <BaseTemplate settings={setting}>
      <Container>
        <S.SectionContainer>
          {/* pega os ultimos 5 posts e adiciona no componente banner */}
          <BannerSlider posts={posts.slice(0, 5)} />

          <LatestReviewsSlider posts={postsReviews} />
        </S.SectionContainer>

        <S.SectionPosts>
          <S.PostsContent>
            <HeadingBar icon={<ListAlt />}>Últimas</HeadingBar>
            <PostsTemplate posts={posts} variables={variables} />
          </S.PostsContent>

          <S.Aside>
            {!!sponsors.sponsors?.length && (
              <Sponsor title={sponsors?.title} sponsors={sponsors?.sponsors} />
            )}
          </S.Aside>
        </S.SectionPosts>
      </Container>
    </BaseTemplate>
  )
}

export default HomePage
