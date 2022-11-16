import PostCard from '../components/PostCard'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import Nav from '../components/Nav'
import CreatePostForm from '../components/CreatePostForm'

const Posts = (props) => {
  const [Posts, setPosts] = useState([])
  const [addedPost, setAddedPost] = useState(false)

  // reloads post feed after user submits a new post
  const updatePostsFeed = () => {
    setAddedPost(!addedPost)
  }
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
  const postPageStyle = {}
  console.log(Posts)
  return (
    <div className="PostsPage" style={postPageStyle}>
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
      <div>
        <CreatePostForm
          creatorId={Posts.creatorId}
          updatePosts={updatePostsFeed}
        />
      </div>
    </div>
  )
}

export default Posts
