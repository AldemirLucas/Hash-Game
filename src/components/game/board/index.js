 import { useState } from 'react'
 import Field from './field'
 import styles from './index.module.css'
 
 function Board (props) {
  const [isFirstPlayer, setIsFirstPlayer] = useState(true)
  const [mark, setMark] = useState(props.firstPlayer)
  const [fields] = useState([
    {mark:''},
    {mark:''},
    {mark:''},
    {mark:''},
    {mark:''},
    {mark:''},
    {mark:''},
    {mark:''},
    {mark:''},
  ])
 
  const checkingMarkup = async (elm) => {
    if (isFirstPlayer === false) {
      fields[elm.id].mark = mark
      setMark(props.firstPlayer)
      setIsFirstPlayer(true)
    } else {
      fields[elm.id].mark = mark
      setMark(props.secondPlayer)
      setIsFirstPlayer(false)
    }
  }

  return (
    <div className={styles.board}>

      {fields.map((elm, i) => 
        <Field 
          key= {i}
          id= {i}
          mark = {fields[i].mark}
          checked = {checkingMarkup}
        />
      )}

    </div>
  )
 }

 export default Board