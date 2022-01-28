import Scoreboard from './scoreboard'
import Board from './board'
import styles from './index.module.css'

function Game (props) {

  return (
    <div className={styles.container}>

      <Scoreboard
        firstPlayer= {props.firstPlayer[0]}
        secondPlayer= {props.secondPlayer[0]}
      />
      
      <Board 
        firstPlayer= {props.firstPlayer[1]}
        secondPlayer= {props.secondPlayer[1]}
      />
    
    </div>
  )
}

export default Game