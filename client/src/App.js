import './CSS/App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Main from './pages/Main'
import Posts from './pages/Posts'
import Profile from './pages/Profile'
import UpdateProfileForm from './components/UpdateProfileForm'
import MatchProfile from './pages/MatchProfile'
import { CheckSession } from './services/Auth'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from './globals'
import { useNavigate } from 'react-router-dom'

function App() {
  let navigate = useNavigate()
  const [posts, setPosts] = useState([])
  const [user, setUser] = useState(null)
  const [matches, setMatches] = useState([])
  const [selectedMatch, setSelectedMatch] = useState({})

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }
  const viewMatchCard = async (id) => {
    navigate(`/users/${id}`)
    try {
      const res = await axios.get(`${BASE_URL}/api/users/${id}`)
      setSelectedMatch(res.data)
    } catch (error) {}
  }
  const getPosts = async () => {
    const res = await axios.get(`${BASE_URL}/api/posts`)
    setPosts(res.data)
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
            element={
              <Main
                viewMatchCard={viewMatchCard}
                getMatches={getMatches}
                matches={matches}
              />
            }
          />
          <Route
            path="/post"
            element={
              <Posts
                posts={posts}
                getPosts={getPosts}
                viewMatchCard={viewMatchCard}
                getMatches={getMatches}
                matches={matches}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                viewMatchCard={viewMatchCard}
                getMatches={getMatches}
                matches={matches}
              />
            }
          />
          <Route
            path="/updateprofile"
            element={
              <UpdateProfileForm getMatches={getMatches} matches={matches} />
            }
          />
          <Route
            path="/users/:id"
            element={
              <MatchProfile
                viewMatchCard={viewMatchCard}
                selectedMatch={selectedMatch}
                getMatches={getMatches}
                matches={matches}
              />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
