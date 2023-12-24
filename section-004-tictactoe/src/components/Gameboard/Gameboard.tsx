import React, { MouseEventHandler} from 'react'
import './Gameboard.css'


export interface GameboardInterface {
  onSelectSquare: (rowIndex: number, colIndex: number) => MouseEventHandler<HTMLButtonElement> | undefined;
  board: Array<Array<string | null>>
  // activeSymbol: string;
}

export const Gameboard = ({onSelectSquare, board}: GameboardInterface) => {

  return (
    <ol id="game-board">
      {
        board.map((row, rowIndex) => {
          return (
            <li key={rowIndex}>
              <ol>
                {
                  row.map((playerSymbol, colIndex) => {
                    return (
                      <li key={colIndex}>
                        <button
                          onClick={onSelectSquare(rowIndex, colIndex)}
                          disabled={playerSymbol !== null}
                        >
                          {playerSymbol}
                        </button>
                      </li>
                    )
                  })
                }
              </ol>
            </li>
          )
        })
      }
    </ol>
  )
}
