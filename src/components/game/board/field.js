import cn from 'classnames'
import styles from './field.module.css'

function Field (props) {
  
  const Turn = () => {
    props.checked({
      id : props.id,
      mark : props.mark,
      isFliped : props.isFliped
    })
  }

  return (
    <div 
      className={cn ([styles.field] , {[styles.fliped] : props.isFliped})}
      onClick={Turn}
    >
      <img
        className={cn ([styles.marked] , {[styles.checked] : props.isFliped})}
        src={props.mark}
        alt=''
      />
    </div>
  )
}

export default Field