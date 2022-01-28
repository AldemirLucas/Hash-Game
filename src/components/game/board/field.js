import { useState } from 'react'
import cn from 'classnames'
import styles from './field.module.css'

function Field (props) {
  const [flip, setFlip] = useState(false)
  
  const Turn = () => {
    setFlip(!flip)
    props.checked({
      id : props.id,
      mark : props.mark
    })
  }

  return (
    <div 
      className={cn ([styles.field] , {[styles.fliped] : flip})}
      onClick={Turn}
    >
      <img
        className={cn ([styles.marked] , {[styles.checked] : flip})}
        src={props.mark}
        alt=''
      />
    </div>
  )
}

export default Field