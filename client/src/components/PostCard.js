import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'

const PostCard = (props) => {
  const [post, setPost] = useState({})
  const { id } = useParams()

  const postCardStyle = {
    border: '3px solid green',
    width: '150px',
    height: '120px',
    display: 'block',
    padding: '30px 0',
    margin: 'auto'
  }
  return (
    <div className="PostCard" style={postCardStyle}>
      {/* <h1>{`${props.post.title}`}</h1>
      <p>{`${props.post.body}`}</p>
      <p>{`${props.post.skills}`}</p> */}
    </div>
  )
}
export default PostCard
