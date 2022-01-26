import Field from './field'
import styles from './index.module.css'

function Game () {

  return (
    <div className={styles.container}>
      
      
      <div className={styles.board}>
        <Field/>
        <Field/>
        <Field/>
        <Field/>
        <Field/>
        <Field/>
        <Field/>
        <Field/>
        <Field/>
      </div>

    </div>
  )
}

export default Game