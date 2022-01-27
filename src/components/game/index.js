import Scoreboard from './scoreboard'
import Board from './board'
import styles from './index.module.css'

function Game (props) {

  return (
    <div className={styles.container}>

      <Scoreboard
        firstPlayer= {props.firstPlayer}
        secondPlayer= {props.secondPlayer}
        player1Points= {1}
        player2Points= {3}
      />
      
      <Board />
    
    </div>
  )
}

export default Game