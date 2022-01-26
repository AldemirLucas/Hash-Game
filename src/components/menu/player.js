import PropTypes from 'prop-types'
import styles from './index.module.css'

function Player (props) {

  return (
    <div className={styles.form}>
      <div className={styles.boxIcon}>
        <img src={props.choice} />
      </div>

      <label className={styles.playerName}>
        {props.player}
        <input
          maxLength="15"
          value={props.name}
          onChange={(e) => props.onChange(e.target.value)}
        />
      </label>
    </div>
  )
}

Player.prototype = {
  choice: PropTypes.string,
  player: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
}

export default Player