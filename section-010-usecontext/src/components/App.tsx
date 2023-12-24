import React from 'react'
import {Header, Shop} from '../components';
import {CartContextProvider} from "../store";

export const App = () => {

  return (
    <CartContextProvider>
      <Header/>
      <Shop/>
    </CartContextProvider>
  );
}
