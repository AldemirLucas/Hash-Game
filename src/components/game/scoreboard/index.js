import { useState } from 'react'
import Trophy from '../../assets/trophy.svg'
import styles from './index.module.css'

const widthBar = {
  1 : '12.5',
  2 : '25',
  3 : '37.5',
  4 : '50'
}

function Scoreboard (props) {
  const [firstPlayer, setFirstPlayer] = useState(0)
  const [secondPlayer, setSecondPlayer] = useState(0)

  return (
    <div className={styles.scoreboard}>

      <div className={styles.trophy}>
        <img src={Trophy} alt='trophy'/>
        <span/>
      </div>

      <div className={styles.players}>
        <div className={styles.score}>
          <p>{props.firstPlayer}</p>
          <p>2 vitórias</p>
        </div>
        
        <div className={styles.score}>
          <p>{props.secondPlayer}</p>
          <p>2 vitórias</p>
        </div>
      </div>

      <div className={styles.bar}>
        <span style={{'width':`12.5%`}}/>
        <span style={{'width':`25%`}}/>
      </div>

    </div>
  )
}

export default Scoreboard