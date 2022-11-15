import Nav from '../components/Nav'
import ProfileCard from '../components/ProfileCard'
import '../CSS/Profile.css'
import { BASE_URL } from '../globals'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Profile = () => {
  let navigate = useNavigate()

  const [user, setUser] = useState([])

  const getProfile = async () => {
    let userId = localStorage.getItem('id')
    const response = await axios.get(`${BASE_URL}/api/users/${userId}`)
    setUser(response.data)
    console.log(response.data)
  }

  useEffect(() => {
    getProfile()
  }, [])

  return (
    <div className="profilePage">
      <div className="nav">
        <Nav />
      </div>
      <div className="profile">
        <div className="profileGrid">
          <div className="profileCard">
            <ProfileCard user={user} />
            <h5 onClick={() => navigate('/updateprofile')}>Update Profile?</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
