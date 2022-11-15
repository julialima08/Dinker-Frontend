import PostCard from '../components/PostCard'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import Nav from '../components/Nav'

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
  console.log(Posts)
  return (
    <div className="Posts">
      <h1>Posts</h1>
      <div className="nav">
        <Nav />
      </div>
      <div className="postGrid" style={postMapStyle}>
        {Posts.map((Posts) => (
          <div className="postCard">
            <PostCard key={Posts.id} Posts={Posts} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Posts
