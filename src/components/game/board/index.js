 import { useState } from 'react'
 import Field from './field'
 import styles from './index.module.css'
 
 function Board (props) {
  const [isFirstPlayer, setIsFirstPlayer] = useState(true)
  const [mark, setMark] = useState(props.firstPlayer)
  const [fields] = useState([
    {mark:''},{mark:''},{mark:''},
    {mark:''},{mark:''},{mark:''},
    {mark:''},{mark:''},{mark:''},
  ])
  const WinningCombination = [
    [fields[0],fields[1],fields[2]],
    [fields[3],fields[4],fields[5]],
    [fields[6],fields[7],fields[8]],
    [fields[0],fields[3],fields[6]],
    [fields[1],fields[4],fields[7]],
    [fields[2],fields[5],fields[8]],
    [fields[0],fields[4],fields[8]],
    [fields[2],fields[4],fields[6]],
  ]
 
  const checkingMarkup = (elm) => {
    if (isFirstPlayer === false) {
      fields[elm.id].mark = mark
      setMark(props.firstPlayer)
      setIsFirstPlayer(true)
    } else {
      fields[elm.id].mark = mark
      setMark(props.secondPlayer)
      setIsFirstPlayer(false)
    }
    
    for (let i = 0; i < 8; i++) {
      checkingVictory(WinningCombination[i])
    }
    
    function checkingVictory(array) {
      if (array[0].mark === array[1].mark && array[1].mark === array[2].mark && array[0].mark !== '') {
        if (isFirstPlayer === true) {
          props.win({
            win : 'firstPlayer',
          })
          gameOver(true)
        } else {
          props.win({
            win : 'secondPlayer',
          })
          gameOver(true)
        }
      }
    }
  }

  function gameOver(params) {
    if (params === true){
      console.log(params)
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