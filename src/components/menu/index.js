import { useState } from 'react'
import Button from '../button'
import PlayerInput from './playerInput'
import cross from '../assets/cross.svg'
import circle from '../assets/circle.svg'
import styles from './index.module.css'

function Menu (props) {
  const [firstPlayer, setFirstPlayer] = useState('Jogador 1')
  const [secondPlayer, setSecondPlayer] = useState('Jogador 2')

  const PlayerValidation = () => {
    const first = firstPlayer.trim()
    const second = secondPlayer.trim()

    if (first !== '' && second !== '') {
      props.onPlay({
        firstPlayer: [first, cross],
        secondPlayer: [second, circle]
      })
    } else {
      props.onPlay({
        firstPlayer: [firstPlayer, cross],
        secondPlayer: [secondPlayer, circle]
      })
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>JOGO DA VELHA</h1>
      
      <div className={styles.content}>

        <div className={styles.players}>
          <PlayerInput
            player='Jogador 1'
            choice={cross}
            value={firstPlayer}
            onChange={setFirstPlayer}
          />

          <PlayerInput 
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