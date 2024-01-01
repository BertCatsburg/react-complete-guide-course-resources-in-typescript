import {createBrowserRouter} from 'react-router-dom'
import React from 'react'
import {HomePage, ProductsPage} from '../../pages'

// *** Older way of defining routes
// import {createRoutesFromElements, Route} from "react-router-dom";
//
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />}/>
//     <Route path="/products" element={<ProductsPage />}/>
//   </Route>
// )
//
// export const router = createBrowserRouter(routeDefinitions)

export const router = createBrowserRouter([
  {
    path: '/', // Main Page on the domain
    element: <HomePage/>
  },
  {
    path: '/products',
    element: <ProductsPage/>
  }
])
