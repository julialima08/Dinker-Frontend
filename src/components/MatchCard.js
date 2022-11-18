import '../CSS/Match.css'
import MagicRainbowButton from './MagicRainbowButton'

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
  background: `linear-gradient(170deg,${randomColor},${b})`,
  transition: `${a} 3s ease-in, ${b} 4s ease-in, ${c} 2s ease-out`
}

const MatchCard = (props) => {
  return (
    <div
      className="matchDiv"
      style={postCardStyle}
      onClick={() => props.onClick(props.id)}
    >
      <MagicRainbowButton className="rainbowButton">
        <div>
          <img className="matchImage" src={props.avatar} alt="" />
        </div>
        <div>
          <div className="tinyHeartDiv">
            <img
              className="tinyHeart"
              src="https://i.imgur.com/k6Xb8Sy.png"
            ></img>
            <h1 className="matchUserName">{props.username}</h1>
          </div>
          <h1 className="matchSkills">{props.skills}</h1>
        </div>
      </MagicRainbowButton>
    </div>
  )
}

export default MatchCard
