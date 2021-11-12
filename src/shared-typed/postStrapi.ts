import { PostsProps } from 'components/Post'
import { PostTagsProps } from 'components/PostTags'

export type PostStrapi = PostsProps & {
  tags: PostTagsProps
  slug: string
}
