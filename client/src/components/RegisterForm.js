import axios from 'axios'

const RegisterForm = () => {
  const createUser = async () => {
    await axios.post('http://localhost:3000/api/auth/register')
  }

  return (
    <div className="form">
      <form onSubmit={createUser}>
        <input placeholder="Full Name" />
        <input placeholder="Username" />
        <input placeholder="Email" />
        <input placeholder="Password" />
        <input placeholder="Confirm Password" />
        <button>Create Account</button>
      </form>
    </div>
  )
}

export default RegisterForm
