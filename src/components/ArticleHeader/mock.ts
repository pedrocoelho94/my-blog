import { data } from 'api/mockPosts.json'

const { id, title, excerpt, cover, author, categories, createdAt } =
  data.posts[0]

export default {
  id,
  title,
  excerpt,
  cover,
  author,
  categories,
  createdAt
}
