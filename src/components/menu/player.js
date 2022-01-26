import styles from './index.module.css'

function Player (props) {

  return (
    <div className={styles.form}>
      <div className={styles.boxIcon}>
        <img src={props.choice}/>
      </div>

      <label className={styles.playerName}>
        {props.player}
        <input
          maxlength="15"
          value={props.name}
          onChange={(e) => props.onChange(e.target.value)}
        />
      </label>
    </div>
  )
}

export default Player