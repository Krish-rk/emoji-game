// Write your code here.

const Navbar = props => {
  const {score, topScore} = this.props
  return (
    <nav>
      <div>
        <img src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png" />
      </div>
      <div>
        <p>Score: {score}</p>
        <p>Top Score:{topScore}</p>
      </div>
    </nav>
  )
}
