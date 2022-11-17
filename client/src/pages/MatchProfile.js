import Nav from '../components/Nav'
import ProfileCard from '../components/ProfileCard'
import '../CSS/Profile.css'
import { BASE_URL } from '../globals'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const MatchProfile = ({ matches, getMatches, matcheeId }) => {
  // const [matcheee, setMatcheee] = useState(null)

  let matchId = window.location.href.split('/').reverse()[0]
  console.log(matchId)
  // const { matchId } = useParams()
  const [matchInfo, setMatchInfo] = useState(null)

  const getMatchInfo = async () => {
    const response = await axios.get(`${BASE_URL}/api/users/${matchId}`)
    setMatchInfo(response.data)
    console.log(response.data)
  }

  useEffect(() => {
    getMatchInfo()
  }, [matchId])
  console.log(matcheeId)
  return (
    <div className="profilePage">
      <div className="nav">
        <Nav getMatches={getMatches} matches={matches} />
      </div>
      <div className="profile">
        {matchInfo ? (
          <div className="cardDiv">
            <div className="cardDivFront">
              <div className="imageWrapper">
                <img
                  className="userAvatar"
                  src={matchInfo.avatar}
                  alt={matchInfo.username}
                ></img>
              </div>
              <div className="infoWrapper">
                <h1>{matchInfo.username}</h1>
                <div className="skills">{matchInfo.skills}</div>
              </div>
            </div>
            <img
              className="moreInfo"
              src="https://i.imgur.com/71LLr11.png"
              alt=""
            >
              {/* //onClick to pull up cardDivInfo??? */}
            </img>
            <div className="cardDivInfo">
              <div className="userProjects">{matchInfo.projects}</div>
              <div className="userSocial">{matchInfo.socialLinks}</div>
            </div>
            {/* {props.user.id === user.id ? (
              <div className="swipeButtons">Something</div>
            ) : (
              <div className="swipeButtons">
                <img
                  className="swipeLeft"
                  src="https://i.imgur.com/TwVQBFx.png"
                  alt=""
                  // onClick={swipeLeft}
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
            )} */}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default MatchProfile
