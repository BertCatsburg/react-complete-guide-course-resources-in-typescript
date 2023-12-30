import {configureStore} from '@reduxjs/toolkit'
import {uiSlice} from './uiSlice'
import {cartSlice, ItemInterface} from "./cartSlice";

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer
  }
})

export const uiActions = uiSlice.actions
export const cartActions = cartSlice.actions
export type StateType = ReturnType<typeof store.getState>
export type {ItemInterface}
