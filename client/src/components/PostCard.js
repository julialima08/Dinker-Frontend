import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const PostCard = (props) => {
  const postCardStyle = {
    display: 'inlineBlock',
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

  return (
    <div className="PostCard" style={postCardStyle}>
      <img src={props.userAvatar}></img>
      <p>{props.username}</p>
      <h1 style={hOne}>{`${props.posts.title}`}</h1>
      <p style={pStyle}>{`${props.posts.body}`}</p>
      <p style={pStyle}>{`${props.posts.skills}`}</p>
    </div>
  )
}
export default PostCard
