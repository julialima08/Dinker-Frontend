import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import MatchCard from '../components/MatchCard'
import { BASE_URL } from '../globals'
import MatchProfile from './MatchProfile'
import '../CSS/Match.css'

const Match = () => {
  const [matches, setMatches] = useState([])

  let navigate = useNavigate()
  // const [matchId, setMatchId] = useState('')
  let { matchesid } = useParams()
  let userId = localStorage.getItem('id')

  const getMatches = async () => {
    const response = await axios.get(
      `${BASE_URL}/api/users/usermatches/${userId}`
    )
    setMatches(response.data.matchees)
    console.log(response.data.matchees)
  }

  const viewMatchCard = (id) => {
    navigate(`/users/${id}`)
    window.location.reload()
  }

  useEffect(() => {
    getMatches()
  }, [matchesid])

  // const handleClick = (id) => {
  //   let matchId = id
  //   navigate(`/matches/${id}`)
  // }

  // let render = null

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
            onClick={viewMatchCard}
          />
        ))}
      </div>
    </div>
  )
}

export default Match
