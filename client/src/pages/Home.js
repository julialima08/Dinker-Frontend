import LoginForm from '../components/LoginForm'
import LoginNav from '../components/LoginNav'
// import Forms from '../components/Forms'
import RegisterForm from '../components/RegisterForm'
import '../CSS/Home.css'

const Home = () => {
  let newUser = false
  return (
    <div className="home">
      <div className="nav-holder">
        <LoginNav />
      </div>
      <div className="form-holder">
        {newUser === true ? <RegisterForm /> : <LoginForm />}
      </div>
    </div>
  )
}

export default Home
