 import Field from './field'
 import styles from './index.module.css'
 
 function Board (props) {

  return (
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
  )
 }

 export default Board