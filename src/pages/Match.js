
import MatchCard from '../components/MatchCard'
import '../CSS/Match.css'

const Match = ({ getMatches, matches, viewMatchCard }) => {
  return (
    <div>
      <div className="matchesMap">
        {matches.map((match) => (
          <MatchCard
            id={match.id}
            key={match.id}
            avatar={match.avatar}
            name={match.name}
            username={match.username}
            skills={match.skills}
            onClick={() => viewMatchCard(match.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default Match
