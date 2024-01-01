import React from 'react'
import {Link} from 'react-router-dom'
import classes from './ProductDetail.module.css'

const baseUrl = "/products/"
const PRODUCTS = [
  {
    id: 1,
    name: 'Product 1'
  },
  {
    id: 2,
    name: 'Product 2'
  },
  {
    id: 3,
    name: 'Product 3'
  },
]
export const ProductsPage = () => {
  return (
    <React.Fragment>
      <h1>all our Products</h1>
      <ul className={classes.productsList}>
        {
          PRODUCTS.map((product) => {
            return (
              <li key={product.id}><Link to={baseUrl + product.id}>{product.name}</Link></li>
            )
          })
        }
      </ul>
    </React.Fragment>
  )
}
