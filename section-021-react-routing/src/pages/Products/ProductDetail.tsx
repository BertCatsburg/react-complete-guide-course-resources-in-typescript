import React from 'react'
import {useParams, Link} from 'react-router-dom'

export const ProductDetailPage = () => {

  const params = useParams()

  return (
    <React.Fragment>
      <h1>Product Details</h1>
      <p>Product ID selected: {params.productId}</p>
      <p><Link to=".." relative="path">Go Back</Link></p>
    </React.Fragment>
  )
}
