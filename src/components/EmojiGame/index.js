// Write your code here.
import {Component} from 'react'

emojiClickedList=[]

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
   gameStatus:0
  }

  emoijiClicked =(id)=>{
      let len = emojiClickedList.length
     if(id in emojiClickedList){
         this.setState({
             gameStatus:1
         })
        
     }
     else if (!(id in emojiClickedList) && len===11){
         const {score,topScore} = this.props
         this.setState({
             gameStatus:2,
             score:score,
             topScore:score
         })
     }
     else{
         const {score,topScore} = this.props
         emojiClickedList.push(id)
         if(score>topScore){
         this.setState({
             gameStatus:0,
             score:score ,
             topScore:score
         })}
         else{
             this.setState({
                 gameStatus:0,
                 score:score
             })
         }

     }
     
  }

  render() {
    const shuffledEmojisList = () => {
        const {score,topScore} = this.state
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    const {gameStatus} = this.props 
    const shuffle = shuffledEmojisList()
    return (
      <div>
   
        <Navbar   score={score} topScore={topScore} />
        <div>
        {
            if(gameStatus===0)
            {
                return(
                    <ul>
                        {
                            shuffle.map(each=><EmojiCard emoji={each}  key={each.id}   emoijiClicked={this. emoijiClicked} />)
                        }
                    </ul>
                )
            }
            else
            {
                return <WinOrLoseCard status={gameStatus}/>
            }
        }
        </div>
      </div>
    )
  }
}
