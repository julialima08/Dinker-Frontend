import axios from 'axios'
import { BASE_URL } from '../globals'
import { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
let userId = localStorage.getItem('id')

const CreatePostForm = (props) => {
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
  // useEffect(() => {
  //   props.getPosts()
  // }, [])
  console.log(props.getPosts)

  const initialState = {
    title: '',
    body: '',
    skills: []
  }
  const [formState, setFormState] = useState(initialState)
  const handleSubmit = async (event) => {
    event.preventDefault()
    let result = await axios.post(`${BASE_URL}/api/posts/create`, formState)
    console.log(result.data)
    setFormState(initialState)
    window.location.reload()
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
        <div className="formDiv">
          <label htmlFor="skills" className="formLabel">
            PRIMARY SKILL
          </label>
          <select
            onChange={handleChange}
            type="checkbox"
            id="skills"
            value={formState.skills}
          >
            <option value="HTML">HTML</option>
            <option value="CSS">CSSL</option>
            <option value="JavaScript">JavaScript</option>
            <option value="React">React</option>
            <option value="MongoDB">MongoDB</option>
            <option value="Express">Express</option>
            <option value="PostgreSQL">PostgreSQL</option>
            <option value="Sequelize">Sequelize</option>
            <option value="Auth">Auth</option>
            <option value="Vue">Vue.jsL</option>
            <option value="Python">Python</option>
            <option value="Flask">Flask</option>
          </select>
        </div>
        <button type="submit">Submit New Post!</button>
        {/* <button type="submit">Submit New Post!</button> */}
      </form>
    </div>
  )
}

export default CreatePostForm
