import LoginForm from '../components/LoginForm'
import LoginNav from '../components/LoginNav'
import RegisterForm from '../components/RegisterForm'
import '../CSS/Home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="nav-holder">
        <LoginNav />
      </div>
      <div className="form-holder">
        <LoginForm />
        <RegisterForm />
      </div>
    </div>
  )
}

export default Home
