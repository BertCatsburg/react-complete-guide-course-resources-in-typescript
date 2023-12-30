import {Card, CartItem} from '../index';
import classes from './Cart.module.css';
import React from 'react'
import {useSelector} from "react-redux";
import {StateType, ItemInterface} from "../../store";


export const Cart = () => {

  const cartItems = useSelector((state: StateType) => state.cart.items)

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {
          cartItems.map((item: ItemInterface) => {
            return (
              <CartItem
                key={item.id}
                item={{ id: item.id, title: item.title, quantity: item.quantity, total: item.totalPrice, price: item.price }}
              />
            )
          })
        }
      </ul>
    </Card>
  );
};
