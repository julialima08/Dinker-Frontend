import Nav from '../components/Nav'
import '../CSS/UpdateProfileForm.css'
import { BASE_URL } from '../globals'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import avatars from '../avatars'
import { deleteProfile, updateProfile } from '../services/Auth'

const UpdateProfile = ({ getMatches, matches }) => {
  let navigate = useNavigate()

  const initialState = {
    avatar: '',
    name: '',
    username: '',
    skills: [],
    socialLinks: '',
    projects: []
  }

  const [formState, setFormState] = useState(initialState)

  const [user, setUser] = useState([])

  const [selecting, setSelecting] = useState(false)

  let userId = localStorage.getItem('id')

  const selectAvatar = (avatar) => {
    let tempState = { ...formState, avatar: avatar.url }
    setFormState(tempState)
    setSelecting(false)
  }

  const getProfile = async () => {
    const response = await axios.get(`/api/users/${userId}`)
    setUser(response.data)
    setFormState(response.data)
  }

  useEffect(() => {
    getProfile()
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    updateProfile(userId, formState)
    navigate(`/profile`)
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const deleteUser = async () => {
    deleteProfile(userId, formState)
    navigate(`/`)
  }

  return (
    <div className="updatePage">
      <div className="nav">
        <Nav getMatches={getMatches} matches={matches} />
      </div>
      <div className="update">
        <div className="updateGrid">
          <form className="updateForm" onSubmit={handleSubmit}>
            <div className="formDiv">
              <div className="updateButtons">
                <button
                  className="submitButton1"
                  type="submit"
                  onClick={deleteUser}
                >
                  Delete Profile
                </button>
                <button
                  className="submitButton2"
                  type="submit"
                  onClick={() => navigate('/profile')}
                >
                  View Profile
                </button>
              </div>
              <label className="avatarDiv formLabel" htmlFor="selectAvatar">
                AVATAR
              </label>
              {selecting ? (
                <div className="avatarMap">
                  {avatars.map((avatar, index) => (
                    <img
                      className="mappedAvatars"
                      key={index}
                      src={avatar.url}
                      alt={avatar.name}
                      onClick={() => selectAvatar(avatar)}
                    />
                  ))}
                </div>
              ) : (
                <div
                  className="selectAvatarButton"
                  onClick={() => setSelecting(true)}
                >
                  <img className="selectedAvatar" src={formState.avatar} />
                </div>
              )}
            </div>
            <div className="formDiv">
              <label htmlFor="name" className="formLabel">
                NAME
              </label>
              <input
                onChange={handleChange}
                type="text"
                id="name"
                value={formState.name}
              ></input>
            </div>
            <div className="formDiv">
              <label htmlFor="username" className="formLabel">
                USERNAME
              </label>
              <input
                onChange={handleChange}
                type="text"
                id="username"
                value={formState.username}
              ></input>
            </div>
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
                <option value="html">html heathen</option>
                <option value="css">css crusader</option>
                <option value="js">javascript jammer</option>
                <option value="react">react revolutionary</option>
                <option value="mongo">mongo madness</option>
                <option value="express">express expressions</option>
                <option value="postgresql">postgres positivity</option>
                <option value="sequelize">sequelize sorceress</option>
                <option value="auth">auth authority</option>
                <option value="vue">vue visionary</option>
                <option value="python">python purveyor</option>
                <option value="flask">flask fiend</option>
              </select>
            </div>
            <div className="formDiv">
              <label htmlFor="socialLinks" className="formLabel">
                SOCIAL LINK
              </label>
              <input
                onChange={handleChange}
                type="text"
                id="socialLinks"
                value={formState.socialLinks}
              ></input>
            </div>
            <div className="formDiv">
              <label htmlFor="projects" className="formLabel">
                PORTFOLIO
              </label>
              <input
                onChange={handleChange}
                type="text"
                id="projects"
                value={formState.projects}
              ></input>
            </div>
            <div className="deleteButtons">
              <button
                className="deleteButton"
                type="delete"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UpdateProfile
