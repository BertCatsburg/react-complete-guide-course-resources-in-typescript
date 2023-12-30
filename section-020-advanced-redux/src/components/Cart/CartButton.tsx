import classes from './CartButton.module.css';
import React from 'react'

export const CartButton = (props: any) => {
  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};
