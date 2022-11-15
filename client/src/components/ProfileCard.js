const ProfileCard = (props) => {
  // const swipeRight = () => {}

  // const swipeLeft = () => {}

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
      <img className="moreInfo" src="" alt="">
        {/* //onClick to pull up cardDivInfo??? */}
      </img>
      <div className="cardDivInfo">
        <div className="userProjects">{props.user.projects}</div>
        <div className="userSocial">{props.user.socialLinks}</div>
      </div>
      <div className="swipeButtons">
        <img className="swipeRight" src="" alt="">
          {/* //onClick for swipeRight */}
        </img>
        <img className="swipeLeft" src="" alt="">
          {/* //onClick for swipeLeft */}
        </img>
      </div>
    </div>
  )
}

export default ProfileCard
