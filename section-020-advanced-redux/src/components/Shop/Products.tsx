import {ProductItem} from '../index'
import classes from './Products.module.css'
import React from 'react'

export const Products = (props:any) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title='Test'
          price={6}
          description='This is a first product - amazing!'
        />
      </ul>
    </section>
  );
};
