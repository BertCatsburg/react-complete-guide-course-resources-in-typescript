import {createBrowserRouter} from 'react-router-dom'
import React from 'react'
import {HomePage, ProductsPage, RootLayout, ErrorPage, ProductDetailPage} from '../../pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {index: true, element: <HomePage/>},
      {path: 'products', element: <ProductsPage/>},
      {path: 'products/:productId', element: <ProductDetailPage/>}
    ]
  },
])
