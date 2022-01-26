import { useState } from 'react';
import Menu from './components/menu'
import Game from './components/game'
import './App.css'

function App() {
  const [gameState, setGameState] = useState('menu')
  const [players, setPlayers] = useState({})

  const handlePlay = (players) => {
    setGameState('playing')
    setPlayers(players)
  }

  console.log(players)

  return (
    <div className="App light">
      {gameState === 'menu' && <Menu onPlay={handlePlay} />}
      {gameState === 'playing' && 
        <Game />
      }
    </div>
  );
}

export default App;
