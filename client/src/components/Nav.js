import { Link } from 'react-router-dom'
import { useState } from 'react'
import { userParams } from 'react-router-dom'

const Nav = () => {
  let { userId } = useParams()

  const [userInfo, setUserInfo] = useState(null)

  const getUserInfo = async () => {
    const response = await axios.get(`http://localhost:3001/api/users/:user_Id`)

    setUserInfo(response.data.user)
  }

  return (
    <div className="header">
      <div className="userInfo">
        <img className="userIcon" src={userInfo.avatar}></img>
      </div>
      <div className="matches"></div>
    </div>
  )
}

export default Nav
