import { useState } from 'react'
import Button from '../button'
import Player from './player'
import cross from '../assets/cross.svg'
import circle from '../assets/circle.svg'
import styles from './index.module.css'

function Menu () {
  const [firstPlayer, setFirstPlayer] = useState('')
  const [secondPlayer, setSecondPlayer] = useState('')

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>JOGO DA VELHA</h1>
      
      <div className={styles.content}>

        <div className={styles.players}>
          <Player
            player='Jogador 1'
            choice={cross}
            value={firstPlayer}
            onChage={setFirstPlayer}
          />

          <Player 
            player='Jogador 2'
            choice={circle}
            value={secondPlayer}
            onChage={setSecondPlayer}
          />
        </div>

        <Button 
          name='JOGAR'
        />
      </div>
    </div>
  )
}

export default Menu