import { useState } from 'react';
import cn from 'classnames'
import Menu from './components/menu'
import Game from './components/game'
import ThemeToggle from './components/themeToggle';
import './App.css'

function App() {
  const [isLightTheme, setIsLightTheme] = useState(false)
  const [gameState, setGameState] = useState('menu')
  const [players, setPlayers] = useState({})

  const handlePlay = (players) => {
    setGameState('playing')
    setPlayers(players)
  }

  return (
    <div className={cn({"App light" : !isLightTheme}, {"App dark" : isLightTheme})}>
      <ThemeToggle 
        theme= {isLightTheme}
        onChange= {setIsLightTheme}
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
