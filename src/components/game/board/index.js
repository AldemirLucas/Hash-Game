import { useState } from 'react'
import Field from './field'
import styles from './index.module.css'

function isVictoryCondition(array) {
  return (
    array[0].mark === array[1].mark &&
    array[1].mark === array[2].mark &&
    array[0].mark !== ''
  )
}

const isTieCondition = (fields) => {
  let findEmpty = false
  fields.forEach(elm => {
    if (elm.mark === '') findEmpty = true
  })
  return !findEmpty
}

function Board (props) {
  const [isFirstPlayer, setIsFirstPlayer] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const [mark, setMark] = useState(props.firstPlayer)
  const [fields, setFields] = useState([
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
    if(isPaused) return

    const newFields = [...fields]

    newFields[elm.id].mark = mark
    newFields[elm.id].isFliped = true
    setFields(newFields)
    setMark(isFirstPlayer ? props.secondPlayer : props.firstPlayer)
    setIsFirstPlayer(!isFirstPlayer)
    
    for (let i = 0; i < 8; i++) {
      if (isVictoryCondition(WinningCombination[i])) {
        props.win({
          win : isFirstPlayer ? 'firstPlayer' : 'secondPlayer'
        })
        return gameOver()
      }
    }

    if (isTieCondition(fields)) {
      gameOver()
    }
  }

  function gameOver() {
    setIsPaused(true)
    setTimeout(() => {
      setFields([
        {mark:''},{mark:''},{mark:''},
        {mark:''},{mark:''},{mark:''},
        {mark:''},{mark:''},{mark:''},
      ])
      setIsPaused(false)
    },1500)
    setIsFirstPlayer(true)
    setMark(props.firstPlayer)
  }

  return (
    <div className={styles.board}>

      {fields.map((elm, i) => 
        <Field
          key= {i}
          id= {i}
          mark = {elm.mark}
          isFliped = {elm.isFliped}
          checked = {checkingMarkup}
        />
      )}

    </div>
  )
}

export default Board