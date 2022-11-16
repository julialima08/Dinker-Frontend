import Nav from '../components/Nav'
import ProfileCard from '../components/ProfileCard'
import '../CSS/Swipe.css'
import { BASE_URL } from '../globals'
import React, { useState, useEffect, useMemo, useRef } from 'react'
import axios from 'axios'
import SwipeCard from '../animation code/swipeAnimation'

const Main = () => {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const response = await axios.get(`${BASE_URL}/api/users`)
    setUsers(response.data)
  }

  useEffect(() => {
    getUsers()
  }, [])

  //credit for swipe animation: github- 3DJakob

  const [currentIndex, setCurrentIndex] = useState(users.length - 1)
  const [lastDirection, setLastDirection] = useState()

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

  const outOfFrame = (id, idx) => {
    console.log(`${id} (${idx}) left the screen!`, currentIndexRef.current)
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
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
        <Nav />
      </div>
      <div className="swipePg">
        <div className="swipeGrid">
          {users.map((user, index) => (
            <SwipeCard
              ref={childRefs[index]}
              className="swipe"
              key={user.id}
              onSwipe={(dir) => swiped(dir, user.id, index)}
              onCardLeftScreen={() => outOfFrame(user.id, index)}
            >
              <div className="swipeCard">
                <ProfileCard user={user} key={user.id} />
              </div>
            </SwipeCard>
          ))}
        </div>
        <div className="buttons">
          <img
            className="swipeLeft"
            src="https://i.imgur.com/TwVQBFx.png"
            alt=""
          />
          <img
            className="moreInfo"
            src="https://i.imgur.com/71LLr11.png"
            alt=""
          ></img>
          <img
            className="swipeRight"
            src="https://i.imgur.com/OgR2xvL.png"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Main
