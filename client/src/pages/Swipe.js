import Nav from '../components/Nav'
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
    console.log(response.data)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className="swipePage">
      <div className="nav">
        <Nav />
      </div>
      <div className="swipe">
        <div className="swipeGrid">
          {users
            .sort((a, b) => a.id - b.id)
            .map((user) => (
              <div className="swipeCard">
                <ProfileCard user={user} key={user.id} />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Swipe
