import { useState } from 'react'
import { SignInUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const LoginForm = ({ setUser }) => {
  const initialState = { email: '', password: '' }
  const [formValues, setFormValues] = useState(initialState)
  let navigate = useNavigate()

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setUser(payload)
    setFormValues(initialState)
    navigate('/main')
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          onChange={handleChange}
          value={formValues.email}
          name="email"
        />
        <input
          placeholder="Password"
          onChange={handleChange}
          value={formValues.password}
          name="password"
        />
        <input placeholder="Confirm Password" />
        <button disabled={!formValues.email || !formValues.password}>
          Login
        </button>
      </form>
      <h3>Don't have an account already?</h3>
      <button>Create Account</button>
    </div>
  )
}

export default LoginForm
