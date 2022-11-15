import LoginForm from '../components/LoginForm'
import LoginNav from '../components/LoginNav'
import RegisterForm from '../components/RegisterForm'
import '../CSS/Home.css'
import { useState } from 'react'

const Home = ({ setUser }) => {
  const [isVisible, setIsVisible] = useState(true)

  const handleLoginClick = () => {
    setIsVisible(false)
  }

  const handleCreateClick = () => {
    setIsVisible(true)
  }

  return (
    <>
      <div className="home">
        <div className="nav-holder">
          <LoginNav />
        </div>
        <div className="form-holder">
          {isVisible ? (
            <div className="login-form">
              <LoginForm setUser={setUser} />
              <h3>Don't have an account already?</h3>
              <button onClick={handleLoginClick}> Create Account</button>
            </div>
          ) : (
            <div className="register-form">
              <RegisterForm setIsVisible={setIsVisible} />
              <h3>have an account already?</h3>
              <button onClick={handleCreateClick}>Login</button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Home
