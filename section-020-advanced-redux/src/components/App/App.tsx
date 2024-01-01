import {Cart, Layout, Notification, Products} from '../index'
import React, {Fragment, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {StateType, fetchCartData, sendCartData} from "../../store";
import {dispatchType} from '../../types'

let isInitial = true

export const App = () => {

  const dispatch: dispatchType  = useDispatch()
  const showCart = useSelector((state: StateType) => state.ui.cartIsVisible)
  const cart = useSelector((state: StateType) => state.cart)
  const notification = useSelector((state: StateType) => state.ui.notification)

  useEffect(() => {
    dispatch(fetchCartData())
  }, [])

  useEffect(() => {
    if (isInitial) {
      isInitial = false
      return
    }
    if (cart.changed) {
      dispatch(sendCartData(cart))
    }
  }, [cart, dispatch])

  return (
    <Fragment>
      {
        notification && <Notification
              status={notification.status}
              title={notification.title}
              message={notification.message}
          />
      }
      <Layout>
        {showCart && <Cart/>}
        <Products/>
      </Layout>
    </Fragment>
  );
}
