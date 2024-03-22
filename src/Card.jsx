import profilePic from './assets/Screenshot (34).png'

function Card(){
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="profile picture"></img>
      <h2 className="card-title">Ian Muriuki</h2>
      <p className="card-text">Tech start-up founder.</p>
      <button className="button"><a href="https://www.linkedin.com/in/ianmuriuki" target="_blank">View my profile</a></button>
    </div>
  )
}

export default Card