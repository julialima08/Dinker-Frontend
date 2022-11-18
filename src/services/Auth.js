import Client from './api'

export const SignInUser = async (data) => {
  try {
    const res = await Client.post('api/auth/login', data)
    localStorage.setItem('token', res.data.token)
    let userId = res.data.user.id
    localStorage.setItem('id', userId)
    return res.data.user
  } catch (error) {
    throw error
  }
}

export const RegisterUser = async (data) => {
  try {
    const res = await Client.post('api/auth/register', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    // Checks if the current token if it exists is valid
    const res = await Client.get('api/auth/session')
    return res.data
  } catch (error) {
    throw error
  }
}

export const updateProfile = async (userId, formState) => {
  try {
    await Client.put(`api/users/${userId}`, formState)
  } catch (error) {
    throw error
  }
}

export const deleteProfile = async (userId) => {
  try {
    await Client.delete(`api/users/${userId}`)
  } catch (error) {
    throw error
  }
}

export const createPost = async (formState) => {
  try {
    await Client.post(`api/posts/create`, formState)
  } catch (error) {}
}
