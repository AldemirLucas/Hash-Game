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
      victoryCondition(player1Points, props.firstPlayer[0])
    } else {
      setPlayer2Points(player2Points + 1)
      victoryCondition(player2Points, props.secondPlayer[0])
    }
  }

  const victoryCondition = (points ,name) => {
    if (points === 3) {
      console.log(`${name} ganhouuuuu`)
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