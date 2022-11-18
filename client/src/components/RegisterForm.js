import { useState } from 'react'
import { RegisterUser } from '../services/Auth'

const RegisterForm = ({ setIsVisible }) => {
  let initialState = {
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  const [newUser, setNewUser] = useState(initialState)

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value })
  }

  const createUser = async (e) => {
    e.preventDefault()
    await RegisterUser({
      name: newUser.name,
      username: newUser.username,
      email: newUser.email,
      password: newUser.password
    })
    setNewUser(initialState)
    setIsVisible(true)
  }

  return (
    <div>
      <form className="form" onSubmit={createUser}>
        <input
          placeholder="Full Name"
          onChange={handleChange}
          value={newUser.name}
          name="name"
          className="input"
        />
        <input
          placeholder="Username"
          onChange={handleChange}
          value={newUser.username}
          name="username"
          className="input"
        />
        <input
          placeholder="Email"
          onChange={handleChange}
          value={newUser.email}
          name="email"
          className="input"
        />
        <input
          placeholder="Password"
          onChange={handleChange}
          value={newUser.password}
          name="password"
          className="input"
        />
        <input
          placeholder="Confirm Password"
          onChange={handleChange}
          value={newUser.confirmPassword}
          name="confirmPassword"
          className="input"
        />
        <button
          disabled={
            (!newUser.email,
            !newUser.name,
            !newUser.username,
            !newUser.password,
            !newUser.confirmPassword) ||
            newUser.confirmPassword !== newUser.password
          }
          className="button"
        >
          Create Account
        </button>
      </form>
    </div>
  )
}

export default RegisterForm
