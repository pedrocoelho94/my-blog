import BaseTemplate from 'templates/Base'
import { StrapiPostAndSettings } from 'api/loadPosts'
import BannerSlider from 'components/BannerSlider'
import PostsTemplate from 'templates/PostsTemplate'

import * as S from './styles'
import LatestReviewsSlider from 'components/LatestReviewsSlider'

export type HomeTemplateProps = StrapiPostAndSettings

const HomePage = ({
  setting,
  posts,
  postsReviews = [],
  variables
}: HomeTemplateProps) => {
  return (
    <BaseTemplate settings={setting}>
      <S.SectionContainer>
        {/* pega os ultimos 3 posts e adiciona no componente banner */}
        <BannerSlider posts={posts.slice(0, 3)} />

        <LatestReviewsSlider posts={postsReviews} />
      </S.SectionContainer>

      <PostsTemplate posts={posts} variables={variables} />
    </BaseTemplate>
  )
}

export default HomePage
