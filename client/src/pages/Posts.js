import PostCard from '../components/PostCard'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const Posts = (props) => {
  const [Posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get(`${BASE_URL}/api/posts`)
      console.log(res.data)
      setPosts(res.data)
    }
    getPosts()
  }, [])
  return (
    <div className="Posts">
      <h1>Posts</h1>
      {Posts.map((Posts) => (
        <PostCard Posts={Posts} />
      ))}
    </div>
  )
}

export default Posts
