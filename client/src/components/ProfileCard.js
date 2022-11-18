import '../CSS/Profile.css'
import { BASE_URL } from '../globals'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ProfileCard = (props, { swipeRight }) => {
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
        <div className="userProfileInfo">
          <div className="infoWrapper">
            <div className="userSkillDiv">
              <h1 className="userProfileName">{props.user.username}</h1>
              <h1 className="skills">{props.user.skills}</h1>
            </div>
            <h2 className="userProfileAka">aka {props.user.name}</h2>
          </div>
          <div className="cardDivInfo">
            <div className="userProjects">
              My favorite project:{props.user.projects}
            </div>
            <div className="userSocial">
              Social media:{props.user.socialLinks}
            </div>
          </div>
        </div>
      </div>
      {props.user.id === user.id ? null : (
        <div className="swipeButtons">
          <img
            className="swipeLeft"
            src="https://i.imgur.com/TwVQBFx.png"
            alt=""
          />
          <img
            className="moreInfo"
            src="https://i.imgur.com/71LLr11.png"
            alt=""
          ></img>
          <img
            className="swipeRight"
            src="https://i.imgur.com/OgR2xvL.png"
            alt=""
            onClick={props.swipeRight}
          />
        </div>
      )}
    </div>
  )
}

export default ProfileCard
