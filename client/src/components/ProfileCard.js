import '../CSS/Profile.css'
import { BASE_URL } from '../globals'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ProfileCard = (props) => {
  const [user, setUser] = useState([])

  let userId = localStorage.getItem('id')

  const getProfile = async () => {
    const response = await axios.get(`${BASE_URL}/api/users/${userId}`)
    setUser(response.data)
  }

  useEffect(() => {
    getProfile()
  }, [])

  return (
    <div className="cardDiv">
      <div className="cardDivFront">
        <div className="imageWrapper">
          <img
            className="userAvatar"
            src={props.user.avatar}
            alt={props.user.username}
          ></img>
        </div>
        <div className="infoWrapper">
          <h1>{props.user.username}</h1>
          <div className="skills">{props.user.skills}</div>
        </div>
      </div>
      <img className="moreInfo" src="https://i.imgur.com/71LLr11.png" alt="">
        {/* //onClick to pull up cardDivInfo??? */}
      </img>
      <div className="cardDivInfo">
        <div className="userProjects">{props.user.projects}</div>
        <div className="userSocial">{props.user.socialLinks}</div>
      </div>
      {props.user.id === user.id ? (
        <div className="swipeButtons">Something</div>
      ) : (
        <div className="swipeButtons">
          <img
            className="swipeRight"
            src="https://i.imgur.com/OgR2xvL.png"
            alt=""
          >
            {/* //onClick for swipeRight */}
          </img>
          <img
            className="swipeLeft"
            src="https://i.imgur.com/TwVQBFx.png"
            alt=""
          >
            {/* //onClick for swipeLeft */}
          </img>
        </div>
      )}
    </div>
  )
}

export default ProfileCard
