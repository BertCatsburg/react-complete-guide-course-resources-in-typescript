import classes from './CartButton.module.css';
import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {StateType, uiActions} from "../../store";

export const CartButton = () => {

  const dispatch = useDispatch()
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle())
  }

  const cartQuantity = useSelector((state:StateType ) => state.cart.totalQuantity)

  return (
    <button onClick={toggleCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};
