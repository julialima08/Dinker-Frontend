import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import MatchCard from '../components/MatchCard'
import { BASE_URL } from '../globals'
import MatchProfile from './MatchProfile'

const Match = (props) => {
  let navigate = useNavigate()

  const [matches, setMatches] = useState([])
  // const [matchId, setMatchId] = useState('')
  let userId = localStorage.getItem('id')

  const getMatches = async () => {
    let res = await axios.get(`${BASE_URL}/api/users/usermatches/${userId}`)
    setMatches(res.data.matchees)
  }
  let { matchesid } = useParams()

  useEffect(() => {
    getMatches()
  }, [matchesid])

  const handleClick = (id) => {
    let matchId = id
    navigate(`/matches/${id}`)
  }

  let render = null

  return (
    <div>
      {matches.map((match) => (
        <>
          {render === null ? (
            <MatchCard
              avatar={match.avatar}
              name={match.name}
              username={match.username}
              onClick={handleClick(match.id)}
            />
          ) : (
            <MatchProfile matchId={match.id} />
          )}
        </>
      ))}
    </div>
  )
}

export default Match
