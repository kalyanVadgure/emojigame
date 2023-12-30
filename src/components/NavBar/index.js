import './index.css'

const NavBar = props => {
  const {score, topScore, checkedPlayAgain} = props

  return (
    <nav className="navBarContainer">
      <div className="logo_container">
        <img
          className="logo_image"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <p>Emoji Game</p>
      </div>

      {checkedPlayAgain && (
        <div className="score_container">
          <p>Score: {score}</p>
          <p>Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
