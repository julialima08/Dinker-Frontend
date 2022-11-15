// import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import MatchCard from '../components/MatchCard'
import Client from '../services/api'
// import { SignInUser } from '../services/Auth'
import axios from 'axios'
import { BASE_URL } from '../globals'

const Nav = ({ setUserId }) => {
  let userId

  const [userInfo, setUserInfo] = useState(null)

  const [matches, setMatches] = useState([])

  const getUserInfo = async (data) => {
    let userId = localStorage.getItem('id')
    console.log(userId)
    const response = await axios.get(`${BASE_URL}/api/users/${userId}`)
    setUserInfo(response.data)
    console.log(response.data)
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

  return (
    <>
      {userInfo ? (
        <div className="header">
          <div className="userInfo">
            <img
              className="userIcon"
              src={userInfo.avatar}
              alt={userInfo.username}
              // onClick={() => navigate()}
            ></img>
            <h1>{userInfo.name}</h1>
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
              <img
                className="swipeButton"
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
        <div className="header">
          <div className="userInfo">
            <img className="userIcon" src=""></img>
            <h1>User Name</h1>
            <div className="userInfoButtons">
              <img className="logoutButton" src="" alt=""></img>
              <img className="postsButton" src="" alt=""></img>
              <img className="swipeButton" src="" alt=""></img>
            </div>
          </div>
          <div className="matches">matches</div>
        </div>
      )}
    </>
  )
}

export default Nav
