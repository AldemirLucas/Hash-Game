import { useState } from 'react'
import Button from '../button'
import Player from './player'
import cross from '../assets/cross.svg'
import circle from '../assets/circle.svg'
import styles from './index.module.css'

function Menu () {
  const [firstPlayer, setFirstPlayer] = useState('')
  const [secondPlayer, setSecondPlayer] = useState('')

  const PlayerValidation = () => {
    const first = firstPlayer.trim()
    const second = secondPlayer.trim()

    if (first && second !== '') {
      console.log('foi')
    } else {
      console.log('está faltando o nome de um jogador')
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>JOGO DA VELHA</h1>
      
      <div className={styles.content}>

        <div className={styles.players}>
          <Player
            player='Jogador 1'
            choice={cross}
            value={firstPlayer}
            onChange={setFirstPlayer}
          />

          <Player 
            player='Jogador 2'
            choice={circle}
            value={secondPlayer}
            onChange={setSecondPlayer}
          />
        </div>

        <Button 
          name='JOGAR'
          onClick={() => PlayerValidation()}
        />
      </div>
    </div>
  )
}

export default Menu