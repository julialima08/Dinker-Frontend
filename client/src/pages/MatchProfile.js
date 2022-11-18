import Nav from '../components/Nav'
import '../CSS/Profile.css'

const MatchProfile = ({
  matches,
  getMatches,
  selectedMatch,
  viewMatchCard
}) => {
  return (
    <div className="profilePage">
      <div className="nav">
        <Nav
          viewMatchCard={viewMatchCard}
          getMatches={getMatches}
          matches={matches}
        />
      </div>
      <div className="profile">
        <div className="profileGrid">
          {selectedMatch ? (
            <div className="profileCard">
              <div className="cardDivFront">
                <div className="imageWrapper">
                  <img
                    className="userAvatar"
                    src={selectedMatch.avatar}
                    alt={selectedMatch.username}
                  ></img>
                </div>
                <div className="infoWrapper">
                  <h1>{selectedMatch.username}</h1>
                  <div className="skills">{selectedMatch.skills}</div>
                </div>
              </div>
              <div className="cardDivInfo">
                <div className="userProjects">{selectedMatch.projects}</div>
                <div className="userSocial">{selectedMatch.socialLinks}</div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default MatchProfile
