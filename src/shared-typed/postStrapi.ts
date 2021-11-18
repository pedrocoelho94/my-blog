import { PostsProps } from 'components/Post'
import { PostTag } from './tag'

export type PostStrapi = PostsProps & {
  tags: PostTag[]
  slug: string
  allowComments: boolean
}
