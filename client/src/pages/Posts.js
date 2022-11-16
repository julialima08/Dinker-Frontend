import PostCard from '../components/PostCard'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import Nav from '../components/Nav'
import { useNavigate } from 'react-router-dom'
import CreatePostForm from '../components/CreatePostForm'
const Posts = (props) => {
  let navigate = useNavigate()

  const [Posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get(`${BASE_URL}/api/posts`)
      setPosts(res.data)
    }
    getPosts()
  }, [])
  const postNavStyle = {
    position: 'fixed'
  }
  const futureAddSpaceStyle = {
    float: 'Right',
    width: '33vw',
    height: '100vh',
    backgroundColor: 'red',
    display: 'none'
  }
  const addPost = {
    marginTop: '0',
    width: '67vw',
    float: 'right'
  }

  const postgridstyle = {
    margin: '0',
    width: '67vw',
    float: 'right'
  }
  // console.log(Posts[1].creatorId)
  console.log(Posts)
  return (
    <div className="PostsPage">
      <div className="nav" style={postNavStyle}>
        <Nav />
      </div>
      <div className="createpost" style={addPost}>
        {/* <h5
          className="createpostlink"
          style={addPostLink}
          onClick={() => navigate('/createpost')}
        >
          create a post
        </h5> */}
        <CreatePostForm />
      </div>
      <div className="postGrid" style={postgridstyle}>
        <div className="futureAddSpace" style={futureAddSpaceStyle}>
          <h5>future add space</h5>
        </div>
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
