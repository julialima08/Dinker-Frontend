import './CSS/App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Swipe from './pages/Swipe'
import Posts from './pages/Posts'
import Profile from './pages/Profile'
import UpdateProfileForm from './components/UpdateProfileForm'
import { CheckSession } from './services/Auth'
import { useState, useEffect } from 'react'

function App() {
  const [user, setUser] = useState(null)

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      checkToken()
    }
  }, [])

  // const handleLogOut = () => {
  //   setUser(null)
  //   localStorage.clear()
  // }

  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home setUser={setUser} />} />
          <Route path="/main" element={<Swipe />} />
          <Route path="/post" element={<Posts />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/updateprofile" element={<UpdateProfileForm />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
