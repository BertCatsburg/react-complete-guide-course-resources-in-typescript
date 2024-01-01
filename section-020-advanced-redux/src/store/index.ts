import {configureStore} from '@reduxjs/toolkit'
import {uiSlice} from './uiSlice'
import {cartSlice} from "./cartSlice";
import {sendCartData} from "./cartActions/sendCartData";
import {fetchCartData} from './cartActions/fetchCartData'


export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer
  }
})

export const uiActions = uiSlice.actions
export const cartActions = cartSlice.actions
export type StateType = ReturnType<typeof store.getState>
export {sendCartData, fetchCartData}
