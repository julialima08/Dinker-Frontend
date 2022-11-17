import '../CSS/Match.css'

const MatchCard = (props) => {
  return (
    <div className="matchDiv" onClick={props.handleClick}>
      <div>
        <img className="matchImage" src={props.avatar} alt="" />
      </div>
      <div>
        <h1 className="matchUserName">{props.username}</h1>
      </div>
    </div>
  )
}

export default MatchCard
