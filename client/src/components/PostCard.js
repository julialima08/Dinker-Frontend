const PostCard = (props) => {
  for (let i = 0; i <= 5; i++) {
    let r = Math.floor(Math.random() * 230)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 235)
    var randomColor = 'rgba(' + r + ',' + g + ',' + b + ')'
  }

  const a = 'hsl(0deg, 96%, 55%)'
  const b = 'hsl(25deg, 100%, 50%)'
  const c = 'hsl(40deg, 100%, 50%)'

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
    textAlign: 'left',
    color: 'black',
    background: `linear-gradient(170deg,${randomColor},${b})`,
    transition: `${a} 3s ease-in, ${b} 4s ease-in, ${c} 2s ease-out`
    //////trans 2
    // transition: `${randomColor} 3s ease-in, ${a} 3s ease-out, ${b} 3s ease-in`
    ///////trans 1
    // transition: 'color 3s ease-in, background-color 1s ease-in'
  }
  const hOne = {}
  const pStyle = {
    fontSize: '16px',
    fontWeight: 'normal',
    lineHeight: '20px'
  }

  return (
    <div className="PostCard" style={postCardStyle}>
      <div className="avatar">
        <img src={props.userAvatar}></img>
        <p>{props.username}</p>
      </div>

      <h1 style={hOne}>{`${props.posts.title}`}</h1>
      <p style={pStyle}>{`${props.posts.body}`}</p>
      <p style={pStyle}>{`${props.posts.skills}`}</p>
    </div>
  )
}
export default PostCard
