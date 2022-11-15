import Nav from '../components/Nav'
import ProfileCard from '../components/ProfileCard'
import '../CSS/UpdateProfileForm.css'
import { BASE_URL } from '../globals'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UpdateProfile = () => {
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
    <div className="updatePage">
      <div className="nav">
        <Nav />
      </div>
      <div className="update">
        <div className="updateGrid">
          <div className="updateCard">
            {/* <ProfileCard user={user} /> */}
            <h5 onClick={() => navigate('/profile')}>See my profile</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateProfile
