import './index.css'

const WinOrLoseCard = props => {
  const {score, playAgain} = props

  const onPlayAgain = () => {
    playAgain()
  }

  const winLoseText = score >= 12 ? 'Won' : 'Lose'
  const imgUrl =
    score >= 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const scoreText = score >= 12 ? 'Best Score' : 'Score'

  return (
    <div className="winLose_card_container">
      <img src={imgUrl} className="winLose_image" alt="win or lose" />
      <div className="winLose_text_button_container">
        <h1>You {winLoseText}</h1>
        <div>
          <p>{scoreText}</p>
          <p className="score_numbers">{score}/12</p>
        </div>
        <button
          type="button"
          className="play_again_button"
          onClick={onPlayAgain}
        >
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
