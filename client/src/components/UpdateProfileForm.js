import Nav from '../components/Nav'
import '../CSS/UpdateProfileForm.css'
import { BASE_URL } from '../globals'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UpdateProfile = () => {
  let navigate = useNavigate()

  const initialState = {
    avatar: '',
    name: '',
    username: '',
    skills: [],
    socialLinks: [],
    projects: []
  }

  const [formState, setFormState] = useState(initialState)

  const [user, setUser] = useState([])

  let userId = localStorage.getItem('id')

  const getProfile = async () => {
    const response = await axios.get(`${BASE_URL}/api/users/${userId}`)
    setUser(response.data)
    setFormState(response.data)
    console.log(response.data)
  }

  useEffect(() => {
    getProfile()
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.put(`${BASE_URL}/api/users/${userId}`, formState)
    // setFormState(initalState)
    navigate(`/profile`)
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const deleteUser = async () => {
    await axios.delete(`${BASE_URL}/api/users/${userId}`)
    navigate(`/`)
  }

  return (
    <div className="updatePage">
      <div className="nav">
        <Nav />
      </div>
      <div className="update">
        <div className="updateGrid">
          <form className="updateForm" onSubmit={handleSubmit}>
            <div className="formDiv">
              <label htmlFor="avatar">Avatar:</label>
              <input
                onChange={handleChange}
                type="text"
                id="avatar"
                value={formState.avatar}
              ></input>
            </div>
            <div className="formDiv">
              <label htmlFor="name">Name:</label>
              <input
                onChange={handleChange}
                type="text"
                id="name"
                value={formState.name}
              ></input>
            </div>
            <div className="formDiv">
              <label htmlFor="username">Username:</label>
              <input
                onChange={handleChange}
                type="text"
                id="username"
                value={formState.username}
              ></input>
            </div>
            <div className="formDiv">
              <label htmlFor="skills">Skills:</label>
              <input
                onChange={handleChange}
                type="text"
                id="skills"
                value={formState.skills}
              ></input>
            </div>
            <div className="formDiv">
              <label htmlFor="socialLinks">Social Links:</label>
              <input
                onChange={handleChange}
                type="text"
                id="socialLinks"
                value={formState.socialLinks}
              ></input>
            </div>
            <div className="formDiv">
              <label htmlFor="projects">Projects:</label>
              <input
                onChange={handleChange}
                type="text"
                id="projects"
                value={formState.projects}
              ></input>
            </div>
            <div className="formButtons">
              <button
                className="submitButton"
                type="submit"
                onClick={handleSubmit}
              >
                SUBMIT
              </button>
              <button
                className="submitButton"
                type="submit"
                onClick={() => navigate('/profile')}
              >
                MY PROFILE
              </button>
              <button
                className="submitButton"
                type="submit"
                onClick={deleteUser}
              >
                DELETE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UpdateProfile
