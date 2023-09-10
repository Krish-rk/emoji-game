// Write your code here.
const WinOrLOseCard = props => {
  const {status, score} = props
  if (status === 2) {
    return (
      <div>
        <div>
          <h1>You Won</h1>
          <p>Best Score</p>
          <p>12/12</p>
        </div>
        <img src="https://assets.ccbp.in/frontend/react-js/won-game-img.png" />
      </div>
    )
  }
  return (
    <div>
      <div>
        <h1>You Lose</h1>
        <p>Score</p>
        <p>{score}/12</p>
        <button>Play Again</button>
      </div>
      <img src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png" />
    </div>
  )
}
