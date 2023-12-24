import { DUMMY_PRODUCTS } from '../data';
import {Product} from './index';
import React from 'react'
import {ProductInterface} from "../types/types";

export const Shop = () => {
  return (
    <section id="shop">
      <h2>Elegant Clothing For Everyone</h2>

      <ul id="products">
        {DUMMY_PRODUCTS.map((product: ProductInterface) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </ul>
    </section>
  );
}
