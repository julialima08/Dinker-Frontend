const ProfileCard = (props) => {
  const swipeRight = () => {}

  const swipeLeft = () => {}

  return (
    <div className="cardDiv">
      <div className="cardDivFront">
        <div className="imageWrapper">
          <img
            className="userAvatar"
            src={props.avatar}
            alt={props.userName}
          ></img>
        </div>
        <div className="infoWrapper">
          <h1>{props.userName}</h1>
          <div className="skills">{props.skills.map()}</div>
        </div>
      </div>
      <img src="" alt="">
        //onClick to pull up cardDivInfo???
      </img>
      <div className="cardDivInfo">
        <div className="userProjects">{props.projects.map()}</div>
        <div className="userSocial">{props.socialLinks.map()}</div>
      </div>
      <div className="swipeButtons">
        <img src="" alt="">
          //onClick for swipeRight
        </img>
        <img src="" alt="">
          //onClick for swipeLeft
        </img>
      </div>
    </div>
  )
}

export default ProfileCard
