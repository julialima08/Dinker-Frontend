import PostCard from '../components/PostCard'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import Nav from '../components/Nav'
import CreatePostForm from '../components/CreatePostForm'
let userId = localStorage.getItem('id')

const Posts = ({ getMatches, matches, viewMatchCard, getPosts, posts }) => {
  const [username, setUsername] = useState(null)
  const [userAvatar, setUserAvatar] = useState(null)
  const getUsers = async () => {
    const response = await axios.get(`${BASE_URL}/api/users/${userId}`)
    setUserAvatar(response.data.avatar)
    setUsername(response.data.username)
  }
  // getPosts()

  useEffect(() => {
    getPosts()
    getUsers()
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

  return (
    <div className="PostsPage">
      <div className="nav" style={postNavStyle}>
        <Nav
          viewMatchCard={viewMatchCard}
          getMatches={getMatches}
          matches={matches}
        />
      </div>
      {posts ? (
        <div className="postGrid" style={postgridstyle}>
          <div className="createpost" style={addPost}>
            <CreatePostForm
              username={username}
              userAvatar={userAvatar}
              getPosts={getPosts}
              posts={posts}
            />
          </div>
          <div className="futureAddSpace" style={futureAddSpaceStyle}>
            <h5>future add space</h5>
          </div>
          {posts
            .sort((a, b) => b.id - a.id)
            .map((post) => (
              <div className="postCard">
                <PostCard
                  username={username}
                  userAvatar={userAvatar}
                  posts={post}
                  key={post.id}
                />
              </div>
            ))}
        </div>
      ) : null}
    </div>
  )
}

export default Posts
