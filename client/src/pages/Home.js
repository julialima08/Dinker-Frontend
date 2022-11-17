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
        <h1 className="homeHeader">Get Dinked.</h1>
        <div className="form-holder">
          {isVisible ? (
            <div className="login-form">
              <LoginForm setUser={setUser} />
              <div className="createHeaderDiv">
                <h3 className="createHeader1">Don't have an account?</h3>
                <div className="shadowDiv">
                  <h2 className="createHeader2">Start getting Dinked</h2>
                  <div className="textShadowDiv">_</div>
                </div>
              </div>
              <button onClick={handleLoginClick} className="homeButton">
                Create Account
              </button>
            </div>
          ) : (
            <div className="register-form">
              <RegisterForm setIsVisible={setIsVisible} />
              <h3>have an account already?</h3>
              <button onClick={handleCreateClick} className="homeButton">
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Home
