const MatchCard = (props) => {
  return (
    <div className="matchDiv" onClick={props.handleClick}>
      <img className="matchImage" src={props.avatar} alt={props.name}></img>
      <h1 className="matchName">{props.name}</h1>
      <h1 className="matchUserName">{props.username}</h1>
    </div>
  )
}

export default MatchCard
