import { loadPosts } from 'api/loadPosts'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    loadPosts({
      authorSlug: 'pedro-coelho'
    }).then((resp) => console.log(resp.posts))
  }, [])

  return <h1>oi</h1>
}
