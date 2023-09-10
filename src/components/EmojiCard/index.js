// Write your code here.

EmojiCard = props => {
  const {emoji, emoijiClicked} = props
  const {emojiUrl, id} = emoji
  const onClickEmoji = () => {
    emojiClicked(id)
  }
  const emojiClicked = () => {}
  return (
    <li>
      <button onClick={onclickEmoji}>
        <img src={emojiUrl} />
      </button>
    </li>
  )
}
