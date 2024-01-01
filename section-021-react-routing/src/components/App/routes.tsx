import {createBrowserRouter} from 'react-router-dom'
import React from 'react'
import {HomePage, ProductsPage} from '../../pages'

export const router = createBrowserRouter([
  {
    path: '/', // Main Page on the domain
    element: <HomePage />
  },
  {
    path: '/products',
    element: <ProductsPage />
  }
])
