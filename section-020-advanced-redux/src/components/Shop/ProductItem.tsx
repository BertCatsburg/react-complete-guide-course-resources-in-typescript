import {Card} from '../index'
import classes from './ProductItem.module.css'
import React from 'react'
import {useDispatch} from "react-redux";
import {cartActions} from '../../store'

export const ProductItem = (props: any) => {
  const {id, title, price, description} = props;

  const dispatch = useDispatch()
  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart({
        id,
        title,
        price,
      })
    )
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};
