import {Card, CartItem} from '../index';
import classes from './Cart.module.css';
import React from 'react'


export const Cart = (props: any) => {
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem
          item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
        />
      </ul>
    </Card>
  );
};
