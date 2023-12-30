import {CartButton} from '../index'
import classes from './MainHeader.module.css'
import React from 'react'

export const MainHeader = () => {
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton/>
          </li>
        </ul>
      </nav>
    </header>
  );
};
