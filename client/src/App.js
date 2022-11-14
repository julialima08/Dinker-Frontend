import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Swipe from './pages/Swipe'
import Posts from './pages/Posts'

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<Swipe />} />
          <Route path="/post" element={<Posts />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
