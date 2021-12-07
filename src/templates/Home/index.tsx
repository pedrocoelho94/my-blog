import BaseTemplate from 'templates/Base'
import BannerSlider from 'components/BannerSlider'
import PostsTemplate from 'templates/PostsTemplate'
import LatestReviewsSlider from 'components/LatestReviewsSlider'

import { ListAlt } from '@styled-icons/material-outlined/ListAlt'
import * as S from './styles'

import { StrapiPostAndSettings } from 'api/loadPosts'
import { Container } from 'components/Container'

export type HomeTemplateProps = StrapiPostAndSettings

const HomePage = ({
  setting,
  posts,
  postsReviews = [],
  variables
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
            <S.PostsTitle>
              <ListAlt size={20} /> Últimas
            </S.PostsTitle>
            <PostsTemplate posts={posts} variables={variables} />
          </S.PostsContent>
        </S.SectionPosts>
      </Container>
    </BaseTemplate>
  )
}

export default HomePage
