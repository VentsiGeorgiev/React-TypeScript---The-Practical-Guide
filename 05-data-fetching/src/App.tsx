import { useEffect, useState, type ReactNode } from 'react'
import './App.css'
import { get } from './util/http'
import BlogPosts, { type BlogPost } from './components/BlogPosts'

type RawDataBlogPost = {
  id: number
  userId: number
  title: string
  body: string
}

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[] | undefined>()
  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState<string | undefined>()

  useEffect(() => {
    const getPosts = async () => {
      setIsFetching(true)
      try {
        const data = (await get(
          'https://jsonplaceholder.typicode.com/posts',
        )) as RawDataBlogPost[]

        const blogPosts: BlogPost[] = data.map((rawPost) => {
          return {
            id: rawPost.id,
            title: rawPost.title,
            text: rawPost.body,
          }
        })
        setFetchedPosts(blogPosts)
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message)
        } else {
          setError('Failed to fetch posts we!')
        }
      } finally {
        setIsFetching(false)
      }
    }
    getPosts()
  }, [])

  let content: ReactNode

  if (fetchedPosts) {
    content = <BlogPosts posts={fetchedPosts} />
  }
  if (isFetching) {
    content = <p id='loading-fallback'>Fetching posts...</p>
  }
  if (error) {
    content = <p>{error}</p>
  }

  return <main>{content}</main>
}

export default App
