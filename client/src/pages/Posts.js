import PostCard from '../components/PostCard'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import Nav from '../components/Nav'
import CreatePostForm from '../components/CreatePostForm'
const Posts = (props) => {
  const [Posts, setPosts] = useState([])
  const getPosts = async () => {
    const res = await axios.get(`${BASE_URL}/api/posts`)
    setPosts(res.data)
  }

  useEffect(() => {
    getPosts()
  }, [])

  const [users, setUsers] = useState([])
  const getUsers = async () => {
    const response = await axios.get(`${BASE_URL}/api/users/`)
    setUsers(response.data)
  }
  useEffect(() => {
    getUsers()
  }, [])
  // console.log(users)

  // let usernames = users.map(({ username }) => username)
  // console.log(usernames)

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
    display: 'inlineBlock',
    // fontFamily: "Helvetica Neue", Roboto, "Segoe UI", Calibri, sans-serif;
    fontSize: '12px',
    fontWeight: 'bold',
    lineHeight: '16px',
    borderColor: '#eee #ddd #bbb',
    borderRadius: '5px',
    borderStyle: 'solid',
    borderWidth: '1px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.15)',
    margin: '0px auto 20px auto',
    padding: '0 16px 16px 16px',
    maxWidth: '468px',
    textAlign: 'left'
  }

  const postgridstyle = {
    margin: '0',
    width: '67vw',
    float: 'right'
  }
  // usernamez = Object.values()
  // console.log(users)

  return (
    <div className="PostsPage">
      <div className="nav" style={postNavStyle}>
        <Nav />
      </div>
      <div className="postGrid" style={postgridstyle}>
        <div className="createpost" style={addPost}>
          <CreatePostForm getPosts={getPosts} />
        </div>
        <div className="futureAddSpace" style={futureAddSpaceStyle}>
          <h5>future add space</h5>
        </div>
        {Posts.map((Posts) => (
          <div className="postCard">
            <PostCard users={users} Posts={Posts} key={Posts.id} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Posts
