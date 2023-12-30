import {Cart, Layout, Products} from '../index'
import React from 'react'
import {useSelector} from 'react-redux'
import {StateType} from "../../store";

export const App = () => {

  const showCart = useSelector((state: StateType) => state.ui.cartIsVisible)

  return (
    <Layout>
      {showCart && <Cart/> }
      <Products/>
    </Layout>
  );
}
