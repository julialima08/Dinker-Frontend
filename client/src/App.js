import './CSS/App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Main from './pages/Main'
import Posts from './pages/Posts'
import CreatePostForm from './components/CreatePostForm'
import Profile from './pages/Profile'
import UpdateProfileForm from './components/UpdateProfileForm'
import MatchProfile from './pages/MatchProfile'
import { CheckSession } from './services/Auth'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from './globals'
function App() {
  const [user, setUser] = useState(null)
  const [matches, setMatches] = useState([])

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    getMatches()
    if (token) {
      checkToken()
    }
  }, [])

  let userId = localStorage.getItem('id')

  const getMatches = async () => {
    const response = await axios.get(
      `${BASE_URL}/api/users/usermatches/${userId}`
    )
    setMatches(response.data.matchees)
  }

  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home setUser={setUser} />} />
          <Route
            path="/main"
            element={<Main getMatches={getMatches} matches={matches} />}
          />
          <Route
            path="/post"
            element={<Posts getMatches={getMatches} matches={matches} />}
          />
          <Route
            path="/createpost"
            element={
              <CreatePostForm getMatches={getMatches} matches={matches} />
            }
          />
          <Route
            path="/profile"
            element={<Profile getMatches={getMatches} matches={matches} />}
          />
          <Route
            path="/updateprofile"
            element={
              <UpdateProfileForm getMatches={getMatches} matches={matches} />
            }
          />
          <Route
            path="/users/:id"
            element={<MatchProfile getMatches={getMatches} matches={matches} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
