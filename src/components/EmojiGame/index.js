import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, emojiIds: [], isPlayagain: true}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  playAgain = () => {
    this.setState(prveState => ({
      score: 0,
      topScore: prveState.topScore,
      emojiIds: [],
      isPlayagain: true,
    }))
  }

  emojiSelected = id => {
    const {emojiIds, topScore, score} = this.state
    if (emojiIds.includes(id) === false) {
      const UpdateTopScore = score + 1 > topScore ? score + 1 : topScore

      this.setState(prveState => ({
        score: prveState.score + 1,
        topScore: UpdateTopScore,
        emojiIds: [...emojiIds, id],
      }))
    } else {
      this.setState({isPlayagain: false})
    }
  }

  render() {
    const emojisList = this.shuffledEmojisList()
    const {score, topScore, isPlayagain} = this.state

    let checkedPlayAgain = isPlayagain
    if (score === 12) {
      checkedPlayAgain = !isPlayagain
    }

    return (
      <div className="emoji_game_main_contianer">
        <div className="nav_bar_container">
          <NavBar
            score={score}
            topScore={topScore}
            checkedPlayAgain={checkedPlayAgain}
          />
        </div>

        <div className="emojis_main_container">
          {checkedPlayAgain && (
            <ul className="emojis_container">
              {emojisList.map(eachEmoji => (
                <EmojiCard
                  emojiDetails={eachEmoji}
                  key={eachEmoji.id}
                  emojiSelected={this.emojiSelected}
                />
              ))}
            </ul>
          )}
          {!checkedPlayAgain && (
            <div>
              <WinOrLoseCard score={score} playAgain={this.playAgain} />
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
