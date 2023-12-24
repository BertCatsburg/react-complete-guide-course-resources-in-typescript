import React from 'react'
import './Log.css'
import {TurnsInterface} from "../types";

interface LogInterface {
  turns: TurnsInterface[];
}

export const Log = ({turns}: LogInterface) => {
  return (
    <ol id="log">
      {
        turns.map((gt, index) => {
          return (
            <li key={`${gt.square.row}-${gt.square.col}`}>
              Turn {turns.length - index} : {gt.player} selected row {gt.square.row} and col {gt.square.col}
            </li>
          )
        })
      }
    </ol>
  )
}
