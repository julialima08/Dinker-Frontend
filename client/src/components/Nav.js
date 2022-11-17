// import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Match from '../pages/Match'
import axios from 'axios'
import { BASE_URL } from '../globals'
import '../CSS/Nav.css'

const Nav = ({ setUserId, matches, getMatches, matcheeId }) => {
  // let userId

  const [userInfo, setUserInfo] = useState(null)

  // const [matches, setMatches] = useState([])

  const getUserInfo = async (data) => {
    let userId = localStorage.getItem('id')

    const response = await axios.get(`${BASE_URL}/api/users/${userId}`)
    setUserInfo(response.data)
    // console.log(response.data)
  }

  // const getMatches = async () => {
  //   const response = await axios.get(`${BASE_URL}/api/users/${userId}/matches`)

  //   setMatches(response.data.user.matches)
  // }

  const viewMatch = (id) => {
    navigate()
  }

  let navigate = useNavigate()

  useEffect(() => {
    getUserInfo()
  }, [])

  // useEffect(() => {
  //   getMatches()
  // }, [matches])
  console.log(matcheeId)
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
                // onClick={() => navigate()}
              ></img>
              <h1 className="userName">{userInfo.name}</h1>
            </div>
            <div className="userInfoButtons">
              <img
                className="logoutButton"
                src="https://i.imgur.com/7RvwMJZ.png"
                alt="logout"
                onClick={() => navigate()}
              ></img>
              <img
                className="postsButton"
                src="https://i.imgur.com/aWrwP5x.png"
                alt="posts"
                onClick={() => navigate(`/post`)}
              ></img>
              <img
                className="swipeButton"
                src="https://i.imgur.com/MBF6BjS.png"
                alt="swipe"
                onClick={() => navigate(`/main`)}
              ></img>
            </div>
          </div>
          <div className="matches">
            <Match getMatches={getMatches} matches={matches} />
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Nav
