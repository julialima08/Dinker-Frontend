// import Nav from '../components/Nav'
import ProfileCard from '../components/ProfileCard'
import '../CSS/Swipe.css'
import { BASE_URL } from '../globals'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Swipe = () => {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const response = await axios.get(`${BASE_URL}/api/users`)
    setUsers(response.data)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className="swipePage">
      <div className="nav">{/* <Nav /> */}</div>
      <div className="swipe">
        <h1>Profile Card Here</h1>
        {users.map((user) => (
          <ProfileCard user={user} key={user.id} />
        ))}
      </div>
    </div>
  )
}

export default Swipe
