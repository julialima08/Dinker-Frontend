import axios from 'axios'
import { BASE_URL } from '../globals'
import { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'

const CreatePostForm = () => {
  const [userInfo, setUserInfo] = useState(null)
  const getUserInfo = async (data) => {
    let userId = localStorage.getItem('id')
    const response = await axios.get(`${BASE_URL}/api/users/${userId}`)
    setUserInfo(response.data)
  }
  useEffect(() => {
    getUserInfo()
  }, [])

  console.log(userInfo)

  // const navigate = useNavigate()
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
  const postformheader = {
    margin: '0'
  }

  return (
    <div>
      {/* <h2 style={postformheader}>What's on your mind {userInfo.name} ?</h2> */}
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
