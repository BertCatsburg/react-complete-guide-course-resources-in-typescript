import React from 'react'
import './GameOver.css'

interface GameOverInterface {
  winner: string | null;
  restart: () => void;
}

export const GameOver = ({winner, restart}: GameOverInterface) => {

  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {
        winner
          ? <p>{winner} won!</p>
          : <p>It&apos;s a draw</p>
      }
      <p><button onClick={restart}>Rematch!</button></p>
    </div>
  )
}
