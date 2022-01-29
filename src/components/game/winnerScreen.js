import Trophy from '../assets/trophy.svg'
import Button from '../button'
import styles from './index.module.css'

function WinnerScreen (props) {
  
  return (
    <div className={styles.winnerScreen}>
      <img src={Trophy} alt="victory" />
      <p>Parabéns {props.name}!</p>

      <div className={styles.buttons}>
        <Button name="REINICIAR" onClick={props.restart}/>
        <Button name="VOLTAR AO MENU" onClick={() => window.location= "/"}/>
      </div>
    </div>
  )
}

export default WinnerScreen