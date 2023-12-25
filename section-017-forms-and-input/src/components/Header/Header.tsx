import logoImg from '../assets/logo.jpg';
import React from 'react'

export const Header = () => {
  return (
    <header>
      <img src={logoImg} alt="A form and a pencil" />
      <h1>React Forms</h1>
    </header>
  );
}
