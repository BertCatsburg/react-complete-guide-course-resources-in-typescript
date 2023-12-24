import reactImg from '../../assets/react-core-concepts.png';
import React from "react";
import './header.css';

export const Header = () => {

  const reactDescriptions = [
    'Fundamental',
    'Core',
    'Crucial'
  ]

  const genRandomInt = (max: number) => {
    return Math.floor(Math.random() * (max + 1));
  }

  const description = reactDescriptions[genRandomInt(reactDescriptions.length - 1)]

  return (
    <header>
      <img src={reactImg} alt="Stylized atom"/>
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}
