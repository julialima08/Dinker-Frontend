// import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import MatchCard from '../components/MatchCard'
import axios from 'axios'
import { BASE_URL } from '../globals'

const Nav = () => {
  let { userId } = useParams()

  const [userInfo, setUserInfo] = useState(null)

  const [matches, setMatches] = useState([])

  const getUserInfo = async () => {
    const response = await axios.get(`${BASE_URL}/users/${userId}`)

    setUserInfo(response.data.user)
  }

  const getMatches = async () => {
    const response = await axios.get(`${BASE_URL}/users/${userId}/matches`)

    setMatches(response.data.user.matches)
  }

  const viewMatch = (id) => {
    navigate()
  }

  let navigate = useNavigate()

  useEffect(() => {
    getUserInfo()
  }, [userId])

  useEffect(() => {
    getMatches()
  }, [matches])

  return (
    <>
      {userInfo ? (
        <div className="header">
          <div className="userInfo">
            <img
              className="userIcon"
              src={userInfo.avatar}
              alt={userInfo.userName}
              // onClick={() => navigate()}
            ></img>
            <h1>{userInfo.userName}</h1>
            <div className="userInfoButtons">
              <img
                className="logoutButton"
                src=""
                alt=""
                onClick={() => navigate()}
              ></img>
              <img
                className="postsButton"
                src=""
                alt=""
                onClick={() => navigate()}
              ></img>
            </div>
          </div>
          <div className="matches">
            {matches.map((match) => (
              <MatchCard
                id={match.id}
                key={match.id}
                image={match.avatar}
                name={match.name}
                username={match.userName}
                onClick={viewMatch}
              />
            ))}
          </div>
        </div>
      ) : (
        <div>Nav Bar Here</div>
      )}
    </>
  )
}

export default Nav
