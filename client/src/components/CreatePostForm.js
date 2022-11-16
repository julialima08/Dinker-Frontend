import axios from 'axios'
import { BASE_URL } from '../globals'
import { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
let userId = localStorage.getItem('id')

const CreatePostForm = () => {
  const [userInfo, setUserInfo] = useState(null)
  const [userAvatar, setUserAvatar] = useState(null)

  const getUserInfo = async (data) => {
    const response = await axios.get(`${BASE_URL}/api/users/${userId}`)
    setUserInfo(response.data.name)
    setUserAvatar(response.data.avatar)
  }
  useEffect(() => {
    getUserInfo()
  }, [])

  // console.log(userInfo)

  const initialState = {
    title: '',
    body: '',
    skills: ''
  }
  const [formState, setFormState] = useState(initialState)
  const handleSubmit = async (event) => {
    event.preventDefault()
    let result = await axios.post(`${BASE_URL}/api/posts/create`, formState)
    console.log(result.data)
    setFormState(initialState)
  }
  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  const postformheader = {}
  const postformheadertext = {
    backgroundColor: 'red'
  }

  return (
    <div>
      <h2 style={postformheader}>
        <img src={userAvatar} alt="no avatar"></img>
        <div style={postformheadertext}>What's on your mind, {userInfo} ?</div>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          id="title"
          value={formState.title}
          placeholder="Title"
          // required
          onChange={handleChange}
        />
        <input
          id="body"
          value={formState.body}
          placeholder="Post body"
          // required
          onChange={handleChange}
        />
        <input
          id="skills"
          value={formState.skills}
          placeholder="Skills you are looking for"
          // required
          onChange={handleChange}
        />
        <button type="submit">Submit New Post!</button>
        {/* <button onClick={() => navigate('/post')}>Return to posts list</button> */}
      </form>
    </div>
  )
}

export default CreatePostForm
