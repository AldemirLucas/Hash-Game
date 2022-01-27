import { useState } from 'react'
import cn from 'classnames'
import Cross from '../../assets/cross.svg'
/*import Circle from '../../assets/circle.svg'*/
import styles from './field.module.css'

function Field () {
  const [flip, setFlip] = useState(false)

  const Turn = () => {
    setFlip(!flip)
    
  }

  return (
    <div 
      className={cn ([styles.field] , {[styles.fliped] : flip})}
      onClick={Turn}
    >
      <img
        className={cn ([styles.marked] , {[styles.checked] : flip})}
        src={Cross}
        alt=''
      />
    </div>
  )
}

export default Field