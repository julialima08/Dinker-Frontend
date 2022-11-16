import PostCard from '../components/PostCard'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'

const Posts = (props) => {
  const [Posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get(`${BASE_URL}/api/posts`)
      setPosts(res.data)
    }
    getPosts()
  }, [])
  const postNavStyleChild = {
    position: 'fixed'
  }
  const postMapStyleChild = {}
  const addPost = {
    width: '50%',
    float: 'Right'
  }

  const postPageStyle = {}
  // console.log(Posts[1].creatorId)
  console.log(Posts)
  return (
    <div className="PostsPage" style={postPageStyle}>
      <div style={addPost}>
        <Link to="/createpost">Add Post</Link>
      </div>
      <div className="nav" style={postNavStyleChild}>
        <Nav />
      </div>
      <div className="postGrid" style={postMapStyleChild}>
        {Posts.map((Posts) => (
          <div className="postCard">
            <PostCard Posts={Posts} key={Posts.id} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Posts
