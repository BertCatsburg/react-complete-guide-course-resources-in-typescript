import React from 'react';
import TicTacToeImage from '../../assets/game-logo.png';

export const Header = () => {
  return (
    <header>
      <img src={TicTacToeImage} alt="" />
      <h1>TicTacToe</h1>
    </header>
  )
}
