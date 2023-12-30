import classes from './CartItem.module.css';
import React from 'react'
import {useDispatch} from "react-redux";
import {cartActions} from "../../store";

interface CartItemInterface {
  item: {
    id: string
    title: string
    quantity: number
    total: number
    price: number
  }
}

export const CartItem = (props: CartItemInterface) => {
  const { id, title, quantity, total, price } = props.item;

  const dispatch = useDispatch()

  const removeItemhandler = () => {
    dispatch(cartActions.removeItemFromCart(id))
  }
  const addItemHandler = () => {
    dispatch(cartActions.addItemToCart({
      id,
      price,
      title,
    }))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemhandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};
