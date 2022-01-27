import PropTypes from 'prop-types'
import styles from './index.module.css'

function PlayerInput (props) {

  return (
    <div className={styles.playerInput}>
      <div className={styles.boxIcon}>
        <img alt='icon-player' src={props.choice}/>
      </div>

      <label className={styles.playerName}>
        {props.player}
        <input
          maxLength="10"
          value={props.name}
          onChange={(e) => props.onChange(e.target.value)}
        />
      </label>
    </div>
  )
}

PlayerInput.prototype = {
  choice: PropTypes.string,
  player: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
}

export default PlayerInput