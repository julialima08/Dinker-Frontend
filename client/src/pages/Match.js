import axios from 'axios'
import { useEffect, useState } from 'react'
import MatchCard from '../components/MatchCard'
import { BASE_URL } from '../globals'

const Match = () => {
  const [matches, setMatches] = useState([])
  let userId = localStorage.getItem('id')

  const getMatches = async () => {
    let res = await axios.get(`${BASE_URL}/api/users/usermatches/${userId}`)
    setMatches(res.data.matchees)
  }

  useEffect(() => {
    getMatches()
  }, [])

  return (
    <div>
      {matches.map((match) => (
        <MatchCard
          avatar={match.avatar}
          name={match.name}
          username={match.username}
        />
      ))}
    </div>
  )
}

export default Match
