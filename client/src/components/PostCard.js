import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const PostCard = (props) => {
  const postCardStyle = {
    display: 'inlineBlock',
    // fontFamily: "Helvetica Neue", Roboto, "Segoe UI", Calibri, sans-serif;
    fontSize: '12px',
    fontWeight: 'bold',
    lineHeight: '16px',
    borderColor: '#eee #ddd #bbb',
    borderRadius: '5px',
    borderStyle: 'solid',
    borderWidth: '1px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.15)',
    margin: '0 auto 20px auto',
    padding: '0 16px 16px 16px',
    maxWidth: '468px',
    textAlign: 'left'
  }
  const hOne = {}
  const pStyle = {
    fontSize: '16px',
    fontWeight: 'normal',
    lineHeight: '20px'
  }

  const userz = props.users

  // function matchUsernameToPost(age) {
  //   return age > document.getElementById('ageToCheck').value
  // }

  // function myFunction() {
  //   document.getElementById('demo').innerHTML = ages.filter(checkAge)
  // }
  let usernames = props.users.map(({ username }) => username)
  // console.log(usernames)

  // console.log(userz)
  return (
    <div className="PostCard" style={postCardStyle}>
      <h1 style={hOne}>{`${props.Posts.title}`}</h1>
      <p style={pStyle}>{`${props.Posts.body}`}</p>
      <p style={pStyle}>{`${props.Posts.skills}`}</p>
      <p style={pStyle}>{`${props.Posts.creatorId}`}</p>
    </div>
  )
}
export default PostCard
