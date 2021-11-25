import BaseTemplate from 'templates/Base'
import { StrapiPostAndSettings } from 'api/loadPosts'
import BannerSlider from 'components/BannerSlider'
import PostsTemplate from 'templates/PostsTemplate'

import * as S from './styles'

export type HomeTemplateProps = StrapiPostAndSettings

const HomePage = ({ setting, posts, variables }: HomeTemplateProps) => {
  return (
    <BaseTemplate settings={setting}>
      <S.SectionContainer>
        <BannerSlider posts={posts} />
      </S.SectionContainer>

      <PostsTemplate posts={posts} variables={variables} />
    </BaseTemplate>
  )
}

export default HomePage
