import React from 'react'
import {RouterProvider} from "react-router-dom";
import {router} from "./routes";

export const App = () => {

  console.log('Rendering APP Component')
  return (
    <RouterProvider router={router} />
  );
}

