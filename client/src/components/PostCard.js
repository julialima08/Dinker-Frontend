const PostCard = (props) => {
  const postCardStyle = {
    // border: '3px solid green',
    // width: '150px',
    // height: '120px',
    // display: 'block',
    // padding: '30px 0',
    // paddingBottom: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '20px',
    marginBottom: '20px',
    //////////////////////////////////
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
    margin: '10px 5px',
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
      <h1 style={hOne}>{`${props.Posts.title}`}</h1>
      <p style={pStyle}>{`${props.Posts.body}`}</p>
      <p style={pStyle}>{`${props.Posts.skills}`}</p>
    </div>
  )
}
export default PostCard
