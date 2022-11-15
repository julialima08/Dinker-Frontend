const ProfileCard = (props) => {
  return (
    <div className="cardDiv">
      <div className="imageWrapper">
        <img
          className="userAvatar"
          src={props.avatar}
          alt={props.userName}
        ></img>
      </div>
      <div className="infoWrapper">
        <h1>{props.userName}</h1>
      </div>
    </div>
  )
}
