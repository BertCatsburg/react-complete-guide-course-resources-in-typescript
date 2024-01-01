import {createBrowserRouter} from 'react-router-dom'
import React from 'react'
import {HomePage, ProductsPage, RootLayout} from '../../pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      {
        path: '/',
        element: <HomePage/>
      },
      {
        path: '/products',
        element: <ProductsPage/>
      }
    ]
  },
])
