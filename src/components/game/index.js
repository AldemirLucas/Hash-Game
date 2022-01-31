import { useState } from 'react'
import ConfettiShow from './confetti'
import Scoreboard from './scoreboard'
import Board from './board'
import WinnerScreen from './winnerScreen'
import styles from './index.module.css'

function Game (props) {
  const [player1Points, setPlayer1Points] = useState(0)
  const [player2Points, setPlayer2Points] = useState(0)
  const [winnigRound, setWinnigRound] = useState()
  const [winningPlayer, setWinningPlayer] = useState({})

  const scoreCount = (elm) => {
    const isRoundWon = elm.win === 'firstPlayer' ? props.firstPlayer[0] : props.secondPlayer[0]
    setWinnigRound(isRoundWon)
    setTimeout(() => {
      setWinnigRound()
    },1500)
    
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
      setTimeout(() => {
        ConfettiShow()
        setWinningPlayer({
          show: true,
          name: name
        })
      },1500)
    }
  }

  const Restart = () => {
    setTimeout(() => {
      setPlayer1Points(0)
      setPlayer2Points(0)
      setWinningPlayer({})
    },1000)
  }

  return (
    <div className={styles.container}>

      {winningPlayer.show && 
        <WinnerScreen 
          name= {winningPlayer.name} 
          restart= {Restart}
        />
      }

      <Scoreboard
        firstPlayer= {props.firstPlayer[0]}
        secondPlayer= {props.secondPlayer[0]}
        player1Points= {player1Points}
        player2Points= {player2Points}
      />

      {winnigRound && 
        <div className={styles.winnigRound}>
          <p>{winnigRound} Venceu a Rodada</p>
        </div>
      }
      
      <Board 
        firstPlayer= {props.firstPlayer[1]}
        secondPlayer= {props.secondPlayer[1]}
        win= {scoreCount}
      />
    
    </div>
  )
}

export default Game