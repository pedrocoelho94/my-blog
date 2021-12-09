import { loadPosts, StrapiPostAndSettings } from 'api/loadPosts'
import { PostStrapi } from 'shared-typed/postStrapi'

export const relatedPostsHook = async (
  data: StrapiPostAndSettings
): Promise<PostStrapi[]> => {
  const postsByTag: PostStrapi[] = []

  // cria um array de posts de arcordo com as tags de post principal
  for (const value of data.posts[0].tags) {
    const { posts } = await loadPosts({ tagSlug: value.slug })
    posts.map((post) => {
      postsByTag.push(post)
    })
  }

  // exclui posts repetidos do array
  const relatedPosts = postsByTag.filter(
    (v, i, a) => a.findIndex((t) => t.id === v.id) === i
  )

  // organiza o array pela data, do mais novo para o mais antigo
  relatedPosts.sort(
    (d1, d2) =>
      new Date(d2.createdAt).getTime() - new Date(d1.createdAt).getTime()
  )

  return relatedPosts
}
