import AsidePosts from 'components/AsidePosts'
import BannerRelatedPosts from 'components/RelatedPosts'
import CardReview from 'components/CardReview'
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
  relatedPosts?: PostStrapi[]
  recentsPostsByAuthor?: PostStrapi[]
  recentsPostsByCategory?: PostStrapi[]
}

const PostTemplate = ({
  settings,
  post,
  recentsPostsByAuthor = [],
  recentsPostsByCategory = [],
  relatedPosts = []
}: PostTemplateProps) => {
  // remove o post principal da lista de posts relacionados
  const newRelatedPosts = relatedPosts.filter(
    (eachPost) => eachPost.id !== post.id
  )

  return (
    <BaseTemplate settings={settings}>
      <S.Wrapper>
        <S.Main>
          <Post {...post} />

          {!!post.reviewDetails?.rating && (
            <S.Rating>Nota: {post.reviewDetails.rating}</S.Rating>
          )}

          {!!post.reviewDetails && (
            <CardReview cover={post.cover} reviewDetails={post.reviewDetails} />
          )}

          <PostTags tags={post.tags} />

          {newRelatedPosts.length > 0 && (
            <BannerRelatedPosts posts={newRelatedPosts} />
          )}

          {/* <Comments
            title={post.title}
            slug={post.slug}
            category={post.categories[0].slug}
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
                  createdAt={post.createdAt}
                />
              ))}
            </S.AsideContent>
          )}

          {recentsPostsByAuthor?.length > 0 && (
            <S.AsideContent>
              <S.AsideTitle>
                Últimas de {post?.author?.displayName}
              </S.AsideTitle>
              {recentsPostsByAuthor?.map((post) => (
                <AsidePosts
                  key={post.id}
                  title={post.title}
                  cover={post.cover.url}
                  slug={post.slug}
                  categories={post.categories}
                  createdAt={post.createdAt}
                />
              ))}
            </S.AsideContent>
          )}
        </S.Aside>
      </S.Wrapper>
    </BaseTemplate>
  )
}

export default PostTemplate
