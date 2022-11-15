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
        />
        <input
          placeholder="Username"
          onChange={handleChange}
          value={newUser.username}
          name="username"
        />
        <input
          placeholder="Email"
          onChange={handleChange}
          value={newUser.email}
          name="email"
        />
        <input
          placeholder="Password"
          onChange={handleChange}
          value={newUser.password}
          name="password"
        />
        <input
          placeholder="Confirm Password"
          onChange={handleChange}
          value={newUser.confirmPassword}
          name="confirmPassword"
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
        >
          Create Account
        </button>
      </form>
    </div>
  )
}

export default RegisterForm
