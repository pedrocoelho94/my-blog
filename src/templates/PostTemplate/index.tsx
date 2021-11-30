import AsidePosts from 'components/AsidePosts'
// import Comments from 'components/Comments'
import Post from 'components/Post'
import PostTags from 'components/PostTags'
import { PostStrapi } from 'shared-typed/postStrapi'
import { SettingsStrapi } from 'shared-typed/settings'
import BaseTemplate from 'templates/Base'
import * as S from './styles'

export type PostTemplateProps = {
  settings: SettingsStrapi
  post: PostStrapi
  recentsPostsByAuthor?: PostStrapi[]
  recentsPostsByCategory?: PostStrapi[]
}

const PostTemplate = ({
  settings,
  post,
  recentsPostsByAuthor = [],
  recentsPostsByCategory = []
}: PostTemplateProps) => (
  <BaseTemplate settings={settings}>
    <S.Wrapper>
      <S.Main>
        <Post {...post} />

        {!!post.reviewDetails?.rating && (
          <S.Rating>Nota: {post.reviewDetails.rating}</S.Rating>
        )}

        {!!post.reviewDetails && (
          <S.ReviewContainer>
            <S.ReviewDetails bgImage={post.cover.url}></S.ReviewDetails>
            <S.ReviewContent>
              <S.ReviewPoster
                src={post.reviewDetails?.poster?.url}
                alt={post.reviewDetails?.poster?.alternativeText}
              />
              <S.ReviewInfo>
                <S.ReviewTitle>
                  {post.reviewDetails?.ptbrTitle}{' '}
                  {`(${post.reviewDetails?.yearRelease})`}
                </S.ReviewTitle>
                <S.ReviewOriginalTitle>
                  {post.reviewDetails?.originalTitle} -{' '}
                  {post.reviewDetails?.director || post.reviewDetails?.creator}
                </S.ReviewOriginalTitle>

                <S.ReviewSinopse>{post.reviewDetails?.sinopse}</S.ReviewSinopse>
                <S.ReviewCast>Elenco: {post.reviewDetails?.cast}</S.ReviewCast>
              </S.ReviewInfo>
            </S.ReviewContent>
          </S.ReviewContainer>
        )}

        <PostTags tags={post.tags} />
        {/* <Comments
          title={post.title}
          slug={post.slug}
          id={post.id}
          allowComments={post.allowComments}
        /> */}
      </S.Main>
      <S.Aside>
        {recentsPostsByCategory?.length > 0 && (
          <S.AsideContent>
            <S.AsideTitle>
              Últimas {post?.categories?.[0].displayName}
            </S.AsideTitle>
            {recentsPostsByCategory?.map((post) => (
              <AsidePosts
                key={post.id}
                title={post.title}
                cover={post.cover.url}
                slug={post.slug}
                categories={post.categories}
              />
            ))}
          </S.AsideContent>
        )}

        {recentsPostsByAuthor?.length > 0 && (
          <S.AsideContent>
            <S.AsideTitle>Últimas de {post?.author?.displayName}</S.AsideTitle>
            {recentsPostsByAuthor?.map((post) => (
              <AsidePosts
                key={post.id}
                title={post.title}
                cover={post.cover.url}
                slug={post.slug}
                categories={post.categories}
              />
            ))}
          </S.AsideContent>
        )}
      </S.Aside>
    </S.Wrapper>
  </BaseTemplate>
)

export default PostTemplate
