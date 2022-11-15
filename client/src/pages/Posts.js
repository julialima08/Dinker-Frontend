import PostCard from '../components/PostCard'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const Posts = (props) => {
  const [Posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get(`${BASE_URL}/api/posts`)
      setPosts(res.data)
    }
    getPosts()
  }, [])

  const postMapStyle = {
    // display: 'flex',
    // flexWrap: 'wrap'
  }

  return (
    <div className="Posts">
      <h1>Posts</h1>
      <div className="postMap" style={postMapStyle}>
        {Posts.map((Posts) => (
          <PostCard key={Posts.id} Posts={Posts} />
        ))}
      </div>
    </div>
  )
}

export default Posts
