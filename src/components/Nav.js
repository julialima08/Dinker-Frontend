import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Match from '../pages/Match'
import axios from 'axios'
import { BASE_URL } from '../globals'
import '../CSS/Nav.css'

const Nav = ({ setUserId, matches, getMatches, viewMatchCard }) => {
  const [userInfo, setUserInfo] = useState(null)

  const getUserInfo = async (data) => {
    let userId = localStorage.getItem('id')

    const response = await axios.get(`/api/users/${userId}`)
    setUserInfo(response.data)
  }

  const viewMatch = (id) => {
    navigate()
  }

  let navigate = useNavigate()

  useEffect(() => {
    getUserInfo()
  }, [])

  return (
    <>
      {userInfo ? (
        <div className="header">
          <div className="userInfo">
            <div
              className="userIconAndName"
              onClick={() => navigate(`/profile`)}
            >
              <img
                className="userIcon"
                src={userInfo.avatar}
                alt={userInfo.username}
              ></img>
              <h1 className="userName">{userInfo.name}</h1>
            </div>
            <div className="userInfoButtons">
              <img
                className="logoutButton"
                src="https://i.imgur.com/JOosYw8.png"
                alt="logout"
                onClick={() => navigate(`/`)}
              ></img>
              <img
                className="postsButton"
                src="https://i.imgur.com/OLlNs9E.png"
                alt="posts"
                onClick={() => navigate(`/post`)}
              ></img>
              <img
                className="swipeButton"
                src="https://i.imgur.com/HlL3t8k.png"
                alt="swipe"
                onClick={() => navigate(`/main`)}
              ></img>
            </div>
          </div>
          <div className="matches">
            <Match
              viewMatchCard={viewMatchCard}
              getMatches={getMatches}
              matches={matches}
            />
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Nav
