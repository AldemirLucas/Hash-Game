import Trophy from '../../assets/trophy.svg'
import styles from './index.module.css'

const widthBar = ['0','12.5','25','37.5','50']

function Scoreboard (props) {

  return (
    <div className={styles.scoreboard}>

      <div className={styles.trophy}>
        <img src={Trophy} alt='trophy'/>
        <span/>
      </div>

      <div className={styles.players}>
        <div className={styles.score}>
          <p>{props.firstPlayer}</p>
          <p>{props.player1Points} vitórias</p>
        </div>
        
        <div className={styles.score}>
          <p>{props.secondPlayer}</p>
          <p>{props.player2Points} vitórias</p>
        </div>
      </div>

      <div className={styles.bar}>
        <span style={{'width':`${widthBar[props.player1Points]}%`}}/>
        <span style={{'width':`${widthBar[props.player2Points]}%`}}/>
      </div>

    </div>
  )
}

export default Scoreboard