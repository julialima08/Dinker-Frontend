import Nav from '../components/Nav'
// import ProfileCard from '../components/ProfileCard'
import '../CSS/Swipe.css'

const Swipe = () => {
  return (
    <div className="swipePage">
      <div className="nav">
        <Nav />
      </div>
      <div className="swipe">
        <h1>Profile Card Here</h1>
        {/* <ProfileCard 
          id={ProfileCard.id}
          key={ProfileCard.id}
          image={ProfileCard.avatar}
          name={ProfileCard.name}
          username={ProfileCard.username}
          socialLinks={ProfileCard.socialLinks}
          projects={ProfileCard.projects}
        /> */}
      </div>
    </div>
  )
}

export default Swipe
