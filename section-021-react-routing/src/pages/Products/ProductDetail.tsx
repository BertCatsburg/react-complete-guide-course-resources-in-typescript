import React from 'react'
import {useParams} from 'react-router-dom'

export const ProductDetailPage = () => {

  const params = useParams()

  console.log(params)

  return (
    <React.Fragment>
      <h1>Product Details</h1>
      <p>Product ID selected: {params.productId}</p>
    </React.Fragment>
  )
}
