import cn from 'classnames'
import Light from '../assets/light.svg'
import Dark from '../assets/dark.svg'
import styles from './index.module.css'

function ThemeToggle (props) {

  return (
    <div className={styles.container} onClick={() => props.onChange(!props.theme)}>
      <div className={cn ([styles.toggle], {[styles.dark] : props.theme})}/>
      <img src={Light} alt="theme"/>
      <img src={Dark} alt="theme"/>
    </div>
  )
}

export default ThemeToggle