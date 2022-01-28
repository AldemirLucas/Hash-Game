import { useState } from 'react'
import Scoreboard from './scoreboard'
import Board from './board'
import styles from './index.module.css'

function Game (props) {
  const [player1Points, setPlayer1Points] = useState(0)
  const [player2Points, setPlayer2Points] = useState(0)

  const scoreCount = (elm) => {
    if (elm.win === 'firstPlayer') {
      setPlayer1Points(player1Points + 1)
    } else {
      setPlayer2Points(player2Points + 1)
    }
  }

  return (
    <div className={styles.container}>

      <Scoreboard
        firstPlayer= {props.firstPlayer[0]}
        secondPlayer= {props.secondPlayer[0]}
        player1Points= {player1Points}
        player2Points= {player2Points}
      />
      
      <Board 
        firstPlayer= {props.firstPlayer[1]}
        secondPlayer= {props.secondPlayer[1]}
        win= {scoreCount}
      />
    
    </div>
  )
}

export default Game