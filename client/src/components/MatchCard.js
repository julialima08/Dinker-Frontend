import '../CSS/Match.css'

const MatchCard = (props) => {
  return (
    <div className="matchDiv" onClick={() => props.onClick(props.id)}>
      <div>
        <img className="matchImage" src={props.avatar} alt="" />
      </div>
      <div>
        <div className="tinyHeartDiv">
          <img
            className="tinyHeart"
            src="https://i.imgur.com/k6Xb8Sy.png"
          ></img>
          <h1 className="matchUserName">{props.username}</h1>
        </div>
        <h1 className="matchSkills">{props.skills}</h1>
      </div>
    </div>
  )
}

export default MatchCard
