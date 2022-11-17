import axios from 'axios'
import { useEffect, useState, useNavigate } from 'react'
import MatchCard from '../components/MatchCard'
import { BASE_URL } from '../globals'

const Match = (props) => {
  let navigate = useNavigate()
  const [matches, setMatches] = useState([])
  let userId = localStorage.getItem('id')

  const getMatches = async () => {
    let res = await axios.get(`${BASE_URL}/api/users/usermatches/${userId}`)
    setMatches(res.data.matchees)
  }

  useEffect(() => {
    getMatches()
  }, [])

  const handleClick = () => {
    navigate('/matches')
  }

  return (
    <div>
      {matches.map((match) => (
        <MatchCard
          avatar={match.avatar}
          name={match.name}
          username={match.username}
          onClick={handleClick}
        />
      ))}
    </div>
  )
}

export default Match
