import { PostsProps } from 'components/Post'
import { Category } from './category'
import { ReviewProps } from './review'
import { PostTag } from './tag'

export type PostStrapi = PostsProps & {
  tags: PostTag[]
  slug: string
  allowComments: boolean
  categories: Category[]
  reviewDetails?: ReviewProps
}
