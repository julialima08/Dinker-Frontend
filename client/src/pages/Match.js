import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import MatchCard from '../components/MatchCard'
import { BASE_URL } from '../globals'
import MatchProfile from './MatchProfile'
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
            onClick={() => viewMatchCard(match.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default Match
