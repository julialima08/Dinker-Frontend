// import { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'

const PostCard = (props) => {
  // const [Posts, setPost] = useState({})
  // const { id } = useParams()

  const postCardStyle = {
    border: '3px solid green',
    width: '150px',
    height: '120px',
    display: 'block',
    padding: '30px 0',
    margin: 'auto'
  }
  // console.log(props.Posts[0])
  return (
    <div className="PostCard" style={postCardStyle}>
      <h1>{`${props.Posts.title}`}</h1>
      <p>{`${props.Posts.body}`}</p>
      <p>{`${props.Posts.skills}`}</p>
    </div>
  )
}
export default PostCard
