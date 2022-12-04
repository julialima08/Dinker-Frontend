import '../CSS/Profile.css'
import { BASE_URL } from '../globals'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ProfileCard = (props) => {
  const [user, setUser] = useState([])

  let userId = localStorage.getItem('id')

  const getProfile = async () => {
    const response = await axios.get(`/api/users/${userId}`)
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
              <h1 className="userProfileName">{props.user.username} |</h1>
              <h1 className="skills">{props.user.skills}</h1>
            </div>
            <h2 className="userProfileAka">aka {props.user.name}</h2>
          </div>
          {props.user.id === user.id ? null : (
            <div className="swipeButtons">
              <img
                className="swipeLeft"
                src="https://i.imgur.com/3J8rOeY.png"
                alt=""
                onClick={props.swipeLeft}
              />
              <img
                className="swipeRight"
                src="https://i.imgur.com/k6Xb8Sy.png"
                alt=""
                onClick={props.swipeRight}
              />
            </div>
          )}
          <div className="cardDivInfo">
            <div className="userProjects">PROJECT {props.user.projects}</div>
            <div className="userSocial">SOCIAL {props.user.socialLinks}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
