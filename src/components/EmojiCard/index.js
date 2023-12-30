// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, emojiSelected} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onEmojiClick = () => {
    emojiSelected(id)
  }

  return (
    <li className="emoji_card_container">
      <button type="button" className="emoji_button" onClick={onEmojiClick}>
        <img className="emoji_image" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
