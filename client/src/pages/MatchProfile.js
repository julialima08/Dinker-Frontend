import Nav from '../components/Nav'
import ProfileCard from '../components/ProfileCard'
import '../CSS/Profile.css'
import { BASE_URL } from '../globals'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Profile = () => {
  const [user, setUser] = useState([])
  let userId

  const getProfile = async () => {
    const response = await axios.get(`${BASE_URL}/api/users/${userId}`)
    setUser(response.data)
  }

  // useEffect(() => {
  //   getProfile()
  // }, [])

  return (
    <div className="profilePage">
      <div className="nav">
        <Nav />
      </div>
      <div className="profile">
        <div className="profileGrid">
          <div className="profileCard">
            <ProfileCard user={user} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
