import Nav from '../components/Nav'
import ProfileCard from '../components/ProfileCard'
import '../CSS/Profile.css'
import { BASE_URL } from '../globals'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Profile = ({ getMatches, matches, viewMatchCard }) => {
  let navigate = useNavigate()

  const [user, setUser] = useState([])

  const getProfile = async () => {
    let userId = localStorage.getItem('id')
    const response = await axios.get(`${BASE_URL}/api/users/${userId}`)
    setUser(response.data)
  }

  useEffect(() => {
    getProfile()
  }, [])

  return (
    <div className="profilePage">
      <div className="nav">
        <Nav
          viewMatchCard={viewMatchCard}
          getMatches={getMatches}
          matches={matches}
        />
      </div>
      <div className="profile">
        <div className="profileGrid">
          <div className="profileCard">
            <ProfileCard user={user} />
            <button
              className="updateProfileButton"
              onClick={() => navigate('/updateprofile')}
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
