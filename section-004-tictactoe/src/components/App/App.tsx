import React, {useState} from 'react';
import {Header, Player, Gameboard, Log, WINNING_COMBINATIONS, GameOver} from '../index';
import './App.css';
import {TurnsInterface} from "../types";


const deriveActivePlayer = (gameTurns: TurnsInterface[]) => {
  // Get activePlayer from this prevState Variable, NOT from another State (activePlayer) !!
  let currentPlayer = 'X'
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O'
  }
  return currentPlayer
}

const PLAYERS: PlayersInterface = {
  X: 'Player 1',
  O: 'Player 2'
}

const INITIAL_GAMEBOARD: Array<Array<string | null>> = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

interface PlayersInterface {
  X: string;
  O: string;
}

interface DecideWhoIsWinnerInterface {
  players: PlayersInterface;
  gameboard: (string | null)[][];
}

const deriveWinner = ({players, gameboard}: DecideWhoIsWinnerInterface) => {
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol: string | null = gameboard[combination[0].row][combination[0].column]
    const secondSquareSymbol: string | null = gameboard[combination[1].row][combination[1].column]
    const thirdSquareSymbol: string | null = gameboard[combination[2].row][combination[2].column]

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      return firstSquareSymbol === 'X' ? players.X : players.O;
    }
  }
  return null;
}

interface DeriveGameboardInterface {
  gameTurns: TurnsInterface[];
}

const deriveGameboard = ({gameTurns}: DeriveGameboardInterface) => {
  // Make a copy because we then edit a new array. Immutability is important !!
  let gameboard = [...INITIAL_GAMEBOARD.map(array => [...array])];
  // Fill Gameboard based on the Turns
  for (const turn of gameTurns) {
    const {square, player} = turn
    const {row, col} = square
    gameboard[row][col] = player;
  }
  return gameboard
}


const App = () => {
  const [players, setPlayers] = useState<PlayersInterface>(PLAYERS)
  const [gameTurns, setGameTurns] = useState<TurnsInterface[]>([]);

  const activePlayer = deriveActivePlayer(gameTurns)
  const gameboard = deriveGameboard({gameTurns: gameTurns})
  let winner = deriveWinner({players: players, gameboard: gameboard})
  const hasDraw = gameTurns.length === 9 && !winner;

  const handleSelectSquare = (rowIndex: number, colIndex: number) => () => {
    setGameTurns(prevTurns => {
      return [
        {square: {row: rowIndex, col: colIndex}, player: deriveActivePlayer(prevTurns)},
        ...prevTurns
      ]
    })
  }

  const handleRestart = () => {
    setGameTurns([])
  }

  const handlePlayerNameChange = (symbol: string, newName: string) => {
    setPlayers((oldPlayers) => {
      return {
        ...oldPlayers,
        [symbol]: newName // [symbol] is Javascript for translating 'symbol' to prop value
      }
    })
  }

  return (
    <React.Fragment>
      <Header/>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player initialName={PLAYERS.X} symbol="X" isActive={activePlayer === 'X'}
                    onNameChange={handlePlayerNameChange}/>
            <Player initialName={PLAYERS.O} symbol="O" isActive={activePlayer === 'O'}
                    onNameChange={handlePlayerNameChange}/>
          </ol>
          {(winner || hasDraw) && <GameOver winner={winner} restart={handleRestart}/>}
          <Gameboard
            onSelectSquare={handleSelectSquare}
            board={gameboard}
          />
        </div>
        <Log turns={gameTurns}/>
      </main>
    </React.Fragment>
  )
}

export default App
