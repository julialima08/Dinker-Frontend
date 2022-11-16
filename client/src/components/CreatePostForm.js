import axios from 'axios'
import { BASE_URL } from '../globals'
import { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
let userId = localStorage.getItem('id')

const CreatePostForm = () => {
  const [userInfo, setUserInfo] = useState(null)
  const [userAvatar, setUserAvatar] = useState(null)

  const getUserInfo = async (data) => {
    // let userId = localStorage.getItem('id')
    const response = await axios.get(`${BASE_URL}/api/users/${userId}`)
    setUserInfo(response.data.name)
    setUserAvatar(response.data.avatar)
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
    // display: 'inlineBlock',
    // // fontFamily: "Helvetica Neue", Roboto, "Segoe UI", Calibri, sans-serif;
    // fontSize: '12px',
    // fontWeight: 'bold',
    // lineHeight: '16px',
    // borderColor: '#eee #ddd #bbb',
    // borderRadius: '5px',
    // borderStyle: 'solid',
    // borderWidth: '1px',
    // boxShadow: '0 1px 3px rgba(0, 0, 0, 0.15)',
    // margin: '0 auto 20px auto',
    // padding: '0 16px 16px 16px',
    // maxWidth: '468px',
    // textAlign: 'left'
  }
  const postformheadertext = {
    backgroundColor: 'red'
  }

  return (
    <div>
      <h2 style={postformheader}>
        <img src="{userAvatar}" alt=""></img>
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
