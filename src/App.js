import { useState, useEffect } from 'react';
import cn from 'classnames'
import Menu from './components/menu'
import Game from './components/game'
import ThemeToggle from './components/themeToggle';
import './App.css'

function App() {
  const [isLightTheme, setIsLightTheme] = useState(false)
  const [gameState, setGameState] = useState('menu')
  const [players, setPlayers] = useState({})
  
  useEffect(() => {
    const theme = localStorage.getItem('theme') === 'dark'
    setIsLightTheme(theme)
  },[])
  
  const Theme = () => {
    setIsLightTheme(!isLightTheme)
    if (isLightTheme) localStorage.setItem('theme','light')
    else localStorage.setItem('theme','dark')
  }
  
  const handlePlay = (players) => {
    setGameState('playing')
    setPlayers(players)
  }
  
  return (
    <div className={cn({"App light" : !isLightTheme}, {"App dark" : isLightTheme})}>
      <ThemeToggle 
        theme= {isLightTheme}
        onChange= {Theme}
      />
      {gameState === 'menu' && <Menu onPlay={handlePlay} />}
      {gameState === 'playing' && 
        <Game
          firstPlayer={players.firstPlayer}
          secondPlayer={players.secondPlayer}
        />
      }
    </div>
  );
}

export default App;
