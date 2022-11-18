import Nav from '../components/Nav'
import ProfileCard from '../components/ProfileCard'
import '../CSS/Swipe.css'
import { BASE_URL } from '../globals'
import React, { useState, useEffect, useMemo, useRef } from 'react'
import axios from 'axios'
import SwipeCard from '../animation code/swipeAnimation'

const Main = ({ getMatches, matches, viewMatchCard }) => {
  const [users, setUsers] = useState([])
  const [currentIndex, setCurrentIndex] = useState(users.length - 1)
  const [lastDirection, setLastDirection] = useState()
  const [rightActive, setRightActive] = useState(false)
  const [leftActive, setLeftActive] = useState(false)

  const getUsers = async () => {
    const response = await axios.get(`${BASE_URL}/api/users`)
    setUsers(response.data)
  }

  useEffect(() => {
    getUsers()
  }, [])

  let userId = localStorage.getItem('id')

  const swipeRight = async (id, idx, e) => {
    await axios.post(`${BASE_URL}/api/users/match/${userId}`, { matchId: id })
    setRightActive(true)
    getMatches()
    setRightActive(false)
  }

  const swipeLeft = () => {
    setLeftActive((prevLeftActive) => !prevLeftActive)
  }

  // credit for swipe animation: github- 3DJakob

  const outOfFrame = (id, idx) => {
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
  }
  const currentIndexRef = useRef(currentIndex)

  const childRefs = useMemo(
    () =>
      Array(users.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  )

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const canGoBack = currentIndex < users.length - 1

  const canSwipe = currentIndex >= 0

  // set last direction and decrease current index
  const swiped = (direction, userToRemove, index) => {
    setLastDirection(direction)
    updateCurrentIndex(index - 1)
  }

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < users.length) {
      await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
    }
  }

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return
    const newIndex = currentIndex + 1
    updateCurrentIndex(newIndex)
    await childRefs[newIndex].current.restoreCard()
  }

  // end of animation code

  return (
    <div className="swipePage">
      <div className="nav">
        <Nav
          viewMatchCard={viewMatchCard}
          getMatches={getMatches}
          matches={matches}
        />
      </div>
      <div classname="swipeTest">
        <div className="swipePg">
          <div className="swipeGrid">
            <div className="swipeCard">
              {users
                .sort(() => 0.5 - Math.random())
                .map((user, index) => (
                  <SwipeCard
                    ref={childRefs[index]}
                    className="swipe"
                    key={user.id}
                    onSwipe={(dir) => swiped(dir, user.id, index)}
                    onCardLeftScreen={() => outOfFrame(user.id, index)}
                  >
                    <div className="swipeCard2">
                      <ProfileCard
                        user={user}
                        key={user.id}
                        swipeRight={() => swipeRight(user.id, index)}
                        swipeLeft={() => swipeLeft()}
                      />
                    </div>
                  </SwipeCard>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
